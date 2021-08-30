'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  // 首页banner
  async getBanner() {
    const bannerList = [ '/public/images/banner/4.jpg', '/public/images/banner/5.jpg' ];
    return bannerList;
  }
  // 首页精选
  async getProClass() {
    const api = this.config.api + 'website/product/listProductClass?num=4';
    const response = await this.ctx.curl(api);
    const data = JSON.parse(response.data);
    return data.rows;
  }
  // 首页产品
  async getProduct() {
    const { app } = this;
    try {
      const result = await app.mysql.select('product', {
        where: { del_flag: 0 },
        orders: [[ 'update_time', 'desc' ]], // 排序方式，
        limit: 8, // 返回数据量
      });
      return result;
    } catch (e) {
      console.log(e);
      return null;
    }
  }
  // 首页新闻
  async getNews() {
    const { app } = this;
    try {
      const result = await app.mysql.select('news', {
        where: { del_flag: 0 },
        orders: [[ 'update_time', 'desc' ]], // 排序方式，
        limit: 5, // 返回数据量
      });
      return result;
    } catch (e) {
      console.log(e);
      return null;
    }
  }
}

module.exports = HomeService;
