'use strict';

const Controller = require('egg').Controller;

class ChooseController extends Controller {
  async index() {
    // 获取banner
    const bannerList = await this.service.home.getBanner();
    const chooseNav = await this.service.choose.chooseNav();
    const { ctx } = this;
    const cid = ctx.query.cid;
    const chooseDetail = await this.service.choose.chooseDetail(cid);
    await ctx.render('choose', { bannerList, chooseNav, cid, chooseDetail });
  }
}

module.exports = ChooseController;
