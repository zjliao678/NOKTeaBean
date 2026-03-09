/**
 * 农历转换单元测试
 * 运行: node utils/lunar.test.js
 */
const { solarToLunar, getLunarString } = require('./lunar');

const tests = [
  // 2026年关键日期
  { date: [2026, 2, 17], expectedMonth: 1, expectedDay: 1, desc: '2026-02-17 = 正月初一(春节)' },
  { date: [2026, 3, 4], expectedMonth: 1, expectedDay: 16, desc: '2026-03-04 = 正月十六' },
  { date: [2026, 12, 8], expectedMonth: 10, expectedDay: 30, desc: '2026-12-08 = 十月三十' },
  { date: [2026, 12, 31], expectedMonth: 11, expectedDay: 23, desc: '2026-12-31 = 冬月廿三' },
  
  // 2025年关键日期
  { date: [2025, 1, 29], expectedMonth: 1, expectedDay: 1, desc: '2025-01-29 = 正月初一(春节)' },
  
  // 2027年关键日期
  { date: [2027, 2, 6], expectedMonth: 1, expectedDay: 1, desc: '2027-02-06 = 正月初一(春节)' },
  
  // 2028年关键日期
  { date: [2028, 1, 26], expectedMonth: 1, expectedDay: 1, desc: '2028-01-26 = 正月初一(春节)' },
  
  // 闰月测试 - 2025年有闰六月
  { date: [2025, 7, 25], expectedMonth: 6, expectedDay: 1, isLeap: true, desc: '2025-07-25 = 闰六月初一' },
  
  // 2026年没有闰月，确保不会误报
  { date: [2026, 11, 9], expectedMonth: 10, expectedDay: 1, isLeap: false, desc: '2026-11-09 = 十月初一(非闰月)' },
  { date: [2026, 12, 9], expectedMonth: 11, expectedDay: 1, isLeap: false, desc: '2026-12-09 = 冬月初一(非闰月)' },
];

let passed = 0;
let failed = 0;

console.log('=== 农历转换单元测试 ===\n');

for (const test of tests) {
  const [y, m, d] = test.date;
  const result = solarToLunar(y, m, d);
  
  const monthOk = result.month === test.expectedMonth;
  const dayOk = result.day === test.expectedDay;
  const leapOk = test.isLeap === undefined || result.isLeap === test.isLeap;
  
  if (monthOk && dayOk && leapOk) {
    console.log(`✓ ${test.desc}`);
    console.log(`  结果: ${result.monthName}${result.dayName}`);
    passed++;
  } else {
    console.log(`✗ ${test.desc}`);
    console.log(`  期望: 月=${test.expectedMonth}, 日=${test.expectedDay}${test.isLeap ? ', 闰月' : ''}`);
    console.log(`  实际: 月=${result.month}, 日=${result.day}, 闰=${result.isLeap}`);
    console.log(`  显示: ${result.monthName}${result.dayName}`);
    failed++;
  }
  console.log();
}

// 测试 getLunarString
console.log('=== getLunarString 测试 ===\n');

const stringTests = [
  { date: [2026, 2, 17], expected: '正月', desc: '初一显示月份' },
  { date: [2026, 3, 4], expected: '十六', desc: '非初一显示日期' },
  { date: [2026, 12, 8], expected: '三十', desc: '12月8日显示日期' },
];

for (const test of stringTests) {
  const [y, m, d] = test.date;
  const result = getLunarString(y, m, d);
  
  if (result === test.expected) {
    console.log(`✓ ${test.desc}: ${y}-${m}-${d} -> "${result}"`);
    passed++;
  } else {
    console.log(`✗ ${test.desc}: ${y}-${m}-${d}`);
    console.log(`  期望: "${test.expected}"`);
    console.log(`  实际: "${result}"`);
    failed++;
  }
}

console.log('\n=== 测试结果 ===');
console.log(`通过: ${passed}`);
console.log(`失败: ${failed}`);

if (failed === 0) {
  console.log('\n所有测试通过！');
  process.exit(0);
} else {
  console.log('\n存在测试失败！');
  process.exit(1);
}
