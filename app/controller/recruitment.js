'use strict';

const Controller = require('egg').Controller;

class RecruitmentController extends Controller {
  async index() {
    const { ctx } = this;
    const bannerList = await ctx.service.home.getBanner();
    await ctx.render('recruitment', { bannerList });
  }
  async recruitList() {
    const { ctx } = this;
    const page = ctx.query.page;
    const total = await ctx.service.recruit.total();
    const result = await ctx.service.recruit.list(page);
    if (result) {
      ctx.body = {
        status: 200,
        total,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '查询招聘列表失败',
      };
    }
  }
}

module.exports = RecruitmentController;
