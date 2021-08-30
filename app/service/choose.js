'use strict';

const Service = require('egg').Service;

class ChooseService extends Service {
  async chooseNav() {
    const { app } = this;
    try {
      const result = await app.mysql.select('product_class', {
        where: { del_flag: 0 },
        orders: [[ 'update_time', 'desc' ]], // 排序方式，
        limit: 10, // 返回数据量
      });
      return result;
    } catch (e) {
      console.log(e);
      return null;
    }
  }
  async chooseDetail(cid) {
    const api = this.config.api + `website/product/listProductByClassId?classId=${cid}&num=4`;
    const response = await this.ctx.curl(api);
    const data = JSON.parse(response.data);
    return data.data;
  }
}

module.exports = ChooseService;
