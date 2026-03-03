const ANCHOR_DATE = new Date('2025-12-31T00:00:00'); // FB2601 Start
const ONE_DAY_MS = 24 * 60 * 60 * 1000;

function formatDate(date) {
  const y = date.getFullYear();
  const m = (date.getMonth() + 1).toString().padStart(2, '0');
  const d = date.getDate().toString().padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function getFBInfo(dateInput) {
  const targetDate = new Date(dateInput);
  targetDate.setHours(0, 0, 0, 0);
  
  // Calculate difference in days
  const diffTime = targetDate - ANCHOR_DATE;
  const diffDays = Math.floor(diffTime / ONE_DAY_MS);
  
  // Calculate FB Index (0-based from FB2601)
  const cycleIndex = Math.floor(diffDays / 14);
  
  // Calculate FB parameters
  // Assuming 26 FBs per "FB Year" cycle as per description (FB2626 -> FB2701)
  const baseYear = 26;
  const yearOffset = Math.floor(cycleIndex / 26);
  const fbInYear = (cycleIndex % 26) + 1;
  // Handle negative index if date is before 2025-12-31? 
  // Requirement implies looking forward, but let's stick to the math.
  // JS modulo of negative numbers behaves differently, so let's assume valid range or handle it.
  // If cycleIndex is negative, we need to adjust. 
  // specific logic: index -1 -> FB2526. 
  
  let currentYear = baseYear + yearOffset;
  let currentFB = fbInYear;
  
  // Handle negative indices correctly for modulo
  if (cycleIndex < 0) {
     const positiveIndex = Math.abs(cycleIndex);
     const yearsBack = Math.ceil(positiveIndex / 26);
     const remainder = positiveIndex % 26;
     
     currentYear = baseYear - yearsBack;
     currentFB = 26 - remainder + 1;
     if (currentFB > 26) { // unexpected edge case fix if remainder is 0
         currentFB = 1; 
         currentYear += 1;
     }
     // Simplify: Just use flexible math if needed, but for now assuming >= FB2601
  }

  const fbName = `FB${currentYear}${currentFB.toString().padStart(2, '0')}`;
  
  // Start Date of this FB
  const fbStartDateObj = new Date(ANCHOR_DATE.getTime() + (cycleIndex * 14 * ONE_DAY_MS));
  const fbEndDateObj = new Date(fbStartDateObj.getTime() + (13 * ONE_DAY_MS));
  
  return {
    name: fbName,
    startDate: formatDate(fbStartDateObj),
    endDate: formatDate(fbEndDateObj),
    startTime: fbStartDateObj.getTime(),
    endTime: fbEndDateObj.getTime()
  };
}

/**
 * Get FBs that overlap with a given month
 */
function getFBsForMonth(year, month) {
  // month is 0-indexed (0=Jan) or 1-indexed? Standard JS Date is 0-indexed.
  // Let's expect 1-indexed for the API, convert inside.
  const startOfMonth = new Date(year, month - 1, 1);
  const endOfMonth = new Date(year, month, 0); // Last day of month
  
  const fbs = [];
  
  // Find FB of start of month
  let currentFB = getFBInfo(startOfMonth);
  
  // Add FBs until we pass the end of month
  while (currentFB.startTime <= endOfMonth.getTime()) {
    fbs.push(currentFB);
    // Next FB
    const nextFBDate = new Date(currentFB.endTime + ONE_DAY_MS);
    currentFB = getFBInfo(nextFBDate);
  }
  
  return fbs;
}

function getPrevFB(fbInfo) {
  const prevDay = new Date(fbInfo.startTime - ONE_DAY_MS);
  return getFBInfo(prevDay);
}

function getNextFB(fbInfo) {
  const nextDay = new Date(fbInfo.endTime + ONE_DAY_MS);
  return getFBInfo(nextDay);
}

module.exports = {
  getFBInfo,
  getFBsForMonth,
  getPrevFB,
  getNextFB
};
