'use strict';

const Controller = require('egg').Controller;

class BookController extends Controller {
  async index() {
    const bannerList = await this.service.home.getBanner();
    const { ctx } = this;
    const api = this.config.api;
    await ctx.render('book', { bannerList, api });
  }
}

module.exports = BookController;
