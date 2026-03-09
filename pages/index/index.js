const { getFBInfo, getPrevFB, getNextFB } = require('../../utils/fbCalculator.js');
const { holidays, countryColors, countryNames } = require('../../utils/holidayData.js');
const { getLunarString } = require('../../utils/lunar.js');

const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const MONTH_ABBR = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

Page({
  data: {
    headerDate: '',
    fbTitle: '',           // e.g. "FB2602, Feb"
    currentFB: null,       // The FB currently focused (defaults to today's FB)
    calendarDays: [],
    year: 0,
    month: 0,              // 0-11, displayed calendar month
    calendarMonthDigit: 0, // 1-12 for background display
    today: null,
    legendItems: []
  },

  onLoad: function() {
    const now = new Date();
    const y = now.getFullYear();
    const m = now.getMonth();
    this.setData({
      today: now,
      year: y,
      month: m,
      calendarMonthDigit: m + 1
    });

    const dateStr = this.formatHeaderDate(now);
    const fbInfo = getFBInfo(now);

    this.setData({
      headerDate: dateStr,
      currentFB: fbInfo,
      fbTitle: fbInfo.name + ', ' + MONTH_ABBR[m]
    });

    this.generateCalendar(y, m);
    this.generateLegend();
  },

  formatHeaderDate(date) {
    const dayName = WEEKDAYS[date.getDay()];
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();
    return `${dayName}, ${y}-${m}-${d}`;
  },

  generateCalendar(year, month) {
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const startDayOfWeek = firstDayOfMonth.getDay();
    const daysInMonth = lastDayOfMonth.getDate();

    const days = [];
    // Leading empty cells so the 1st aligns with the correct weekday
    for (let i = 0; i < startDayOfWeek; i++) {
      days.push({ isEmpty: true, fullDate: 'empty-' + year + '-' + month + '-' + i });
    }
    // Only current month days
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      days.push(this.createDayObject(date, true));
    }

    const currentFB = this.data.currentFB;
    const fbTitle = currentFB ? (currentFB.name + ', ' + MONTH_ABBR[month]) : '';

    this.setData({
      calendarDays: days,
      calendarMonthDigit: month + 1,
      fbTitle: fbTitle
    });
  },

  createDayObject(date, isCurrentMonth) {
    const dateStr = this.formatDateIso(date);
    const currentFB = this.data.currentFB;
    const dayHolidays = holidays[dateStr] || [];
    const isToday = (date.toDateString() === this.data.today.toDateString());

    let isInFBRange = false;
    let isFBEnd = false;
    let isFBStart = false;
    if (currentFB) {
      isInFBRange = dateStr >= currentFB.startDate && dateStr <= currentFB.endDate;
      isFBEnd = dateStr === currentFB.endDate;
      isFBStart = dateStr === currentFB.startDate;
    }

    // When many holidays: show first 2 as vertical squares on left, rest below date
    const holidaysLeft = dayHolidays.length > 3 ? dayHolidays.slice(0, 2) : [];
    const holidaysBottom = dayHolidays.length > 3 ? dayHolidays.slice(2) : dayHolidays;

    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();
    const lunarStr = getLunarString(y, m, d);

    return {
      isEmpty: false,
      date: date,
      fullDate: dateStr,
      dayNum: date.getDate(),
      lunarStr: lunarStr,
      isCurrentMonth: isCurrentMonth,
      isToday: isToday,
      isFBStart: isFBStart,
      isFBEnd: isFBEnd,
      isInFBRange: isInFBRange,
      holidays: dayHolidays,
      holidaysLeft: holidaysLeft,
      holidaysBottom: holidaysBottom
    };
  },

  formatDateIso(date) {
    const y = date.getFullYear();
    const m = (date.getMonth() + 1).toString().padStart(2, '0');
    const d = date.getDate().toString().padStart(2, '0');
    return `${y}-${m}-${d}`;
  },

  // Whether (year, month) is the first month that currentFB touches
  isFirstMonthOfFB(year, month) {
    const fb = this.data.currentFB;
    if (!fb) return true;
    const [sy, sm] = fb.startDate.split('-').map(Number);
    return year === sy && month === sm - 1;
  },

  // Whether (year, month) is the last month that currentFB touches
  isLastMonthOfFB(year, month) {
    const fb = this.data.currentFB;
    if (!fb) return true;
    const [ey, em] = fb.endDate.split('-').map(Number);
    return year === ey && month === em - 1;
  },

  prevFBView() {
    let { year, month, currentFB } = this.data;
    if (!currentFB) return;

    if (!this.isFirstMonthOfFB(year, month)) {
      month--;
      if (month < 0) {
        month = 11;
        year--;
      }
      this.setData({ year, month, calendarMonthDigit: month + 1 }, () => {
        this.generateCalendar(year, month);
      });
      return;
    }

    const prevFB = getPrevFB(currentFB);
    const [ey, em] = prevFB.endDate.split('-').map(Number);
    this.setData({
      currentFB: prevFB,
      year: ey,
      month: em - 1,
      calendarMonthDigit: em
    }, () => {
      this.generateCalendar(ey, em - 1);
    });
  },

  nextFBView() {
    let { year, month, currentFB } = this.data;
    if (!currentFB) return;

    if (!this.isLastMonthOfFB(year, month)) {
      month++;
      if (month > 11) {
        month = 0;
        year++;
      }
      this.setData({ year, month, calendarMonthDigit: month + 1 }, () => {
        this.generateCalendar(year, month);
      });
      return;
    }

    const nextFB = getNextFB(currentFB);
    const [sy, sm] = nextFB.startDate.split('-').map(Number);
    this.setData({
      currentFB: nextFB,
      year: sy,
      month: sm - 1,
      calendarMonthDigit: sm
    }, () => {
      this.generateCalendar(sy, sm - 1);
    });
  },

  onDateClick(e) {
    const dateStr = e.currentTarget.dataset.date;
    const date = new Date(dateStr);
    const fbInfo = getFBInfo(date);
    const y = date.getFullYear();
    const m = date.getMonth();

    this.setData({
      currentFB: fbInfo,
      headerDate: this.formatHeaderDate(date),
      year: y,
      month: m,
      calendarMonthDigit: m + 1
    }, () => {
      this.generateCalendar(y, m);
    });
  },
  
  generateLegend() {
      const items = Object.keys(countryColors).map(code => ({
          code,
          color: countryColors[code],
          textColor: (code === 'CN' || code === 'DE' || code === 'FI' || code === 'IN') ? '#000' : '#fff' // Adjust text contrast manually or smart logic
          // Simple manual tweak: Yellow/Green/Cyan/Orange -> Black text. Black/Purple/Red/Grey -> White text.
      }));
      // Refine text colors
      items.forEach(item => {
          if (['CN', 'IN', 'DE', 'FI', 'RO'].includes(item.code)) { 
              // RO is grey, FI is light blue, DE is green, IN is orange, CN is yellow
              item.textColor = '#000';
          } else {
              item.textColor = '#fff';
          }
      });
      
      this.setData({ legendItems: items });
  }
});
