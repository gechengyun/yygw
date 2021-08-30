// 扩展里面yin yon
const sd = require('silly-datetime');
module.exports = {
  formatTime(param) {
    // 格式化日期
    return sd.format(new Date(param), 'YYYY-MM-DD');
  },
};
