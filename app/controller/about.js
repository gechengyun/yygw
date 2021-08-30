'use strict';

const Controller = require('egg').Controller;

class AboutController extends Controller {
  async index() {
    const bannerList = await this.service.home.getBanner();
    const { ctx } = this;
    await ctx.render('about', { bannerList });
  }
}

module.exports = AboutController;
