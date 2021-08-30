'use strict';

const Controller = require('egg').Controller;

class PersonController extends Controller {
  async index() {
    const bannerList = await this.service.home.getBanner();
    const { ctx } = this;
    const api = this.config.api;
    await ctx.render('person', { bannerList, api });
  }
}

module.exports = PersonController;
