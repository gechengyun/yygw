'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async total() {
    const { app } = this;
    try {
      const total = await app.mysql.query('SELECT COUNT(id) as total FROM news where del_flag=?', [ 0 ]);
      return total[0].total;
    } catch (e) {
      console.log(e);
      return 0;
    }
  }
  async getNewList(page) {
    const { app } = this;
    try {
      const result = await app.mysql.select('news', {
        where: { del_flag: 0 },
        orders: [[ 'update_time', 'desc' ]], // 排序方式，
        limit: 5, // 返回数据量
        offset: page * 5 - 5, // 数据偏移量
      });
      return result;
    } catch (e) {
      console.log(e);
      return null;
    }
  }
  async getNewsDetail(id) {
    const { app } = this;
    try {
      const result = await app.mysql.get('news', { id });
      return result;
    } catch (e) {
      console.log(e);
      return null;
    }
  }
}

module.exports = NewsService;
