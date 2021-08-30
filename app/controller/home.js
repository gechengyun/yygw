'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const bannerList = await this.service.home.getBanner();
    const proList = await this.service.home.getProduct();
    const newsList = await this.service.home.getNews();
    const proClassList = await this.service.home.getProClass();
    const { ctx } = this;
    await ctx.render('index', { bannerList, proList, newsList, proClassList });
  }
}

module.exports = HomeController;
