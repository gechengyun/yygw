'use strict';

const Service = require('egg').Service;

class RecruitService extends Service {
  async total() {
    const { app } = this;
    try {
      const total = await app.mysql.query('SELECT COUNT(id) as total FROM recruit where del_flag=?', [ 0 ]);
      return total[0].total;
    } catch (e) {
      console.log(e);
      return 0;
    }
  }
  async list(page) {
    const { app } = this;
    try {
      const result = await app.mysql.select('recruit', {
        where: { del_flag: 0 },
        orders: [[ 'create_time', 'desc' ]], // 排序方式，
        limit: 5, // 返回数据量
        offset: page * 5 - 5, // 数据偏移量
      });
      return result;
    } catch (e) {
      console.log(e);
      return null;
    }
  }
}

module.exports = RecruitService;
