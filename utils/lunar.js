/**
 * 农历工具 - 使用 js-calendar-converter 库
 * 支持 1900-2100 年的公历农历互转
 */
const calendar = require('./calendar');

/**
 * 公历转农历
 * @param {number} solarYear - 公历年
 * @param {number} solarMonth - 公历月 (1-12)
 * @param {number} solarDay - 公历日
 * @returns {Object} 农历信息对象
 */
function solarToLunar(solarYear, solarMonth, solarDay) {
  const result = calendar.solar2lunar(solarYear, solarMonth, solarDay);
  if (result === -1) {
    return {
      month: 1,
      day: 1,
      monthName: '正月',
      dayName: '初一',
      isLeap: false
    };
  }
  return {
    month: result.lMonth,
    day: result.lDay,
    monthName: result.IMonthCn,
    dayName: result.IDayCn,
    isLeap: result.isLeap
  };
}

/**
 * 日历用：仅显示日期；初一当天显示月份（如「正月」），其余只显示日期（如「十六」）
 * @param {number} solarYear - 公历年
 * @param {number} solarMonth - 公历月 (1-12)
 * @param {number} solarDay - 公历日
 * @returns {string} 农历日期字符串
 */
function getLunarString(solarYear, solarMonth, solarDay) {
  const result = calendar.solar2lunar(solarYear, solarMonth, solarDay);
  if (result === -1) {
    return '初一';
  }
  if (result.lDay === 1) {
    return result.IMonthCn;
  }
  return result.IDayCn;
}

module.exports = {
  getLunarString,
  solarToLunar
};
