'use strict';

const helper = require('../extend/helper');

const Controller = require('egg').Controller;

class NewController extends Controller {
  async index() {
    // 获取banner
    const bannerList = await this.service.home.getBanner();
    const { ctx } = this;
    await ctx.render('news', { bannerList });
  }
  async detail() {
    const bannerList = await this.service.home.getBanner();
    const { ctx } = this;
    const id = ctx.query.id;
    const newsDetail = await this.service.news.getNewsDetail(id);
    await ctx.render('newsDetail', { bannerList, newsDetail });
  }

  // 新闻列表
  async newsList() {
    const { ctx } = this;
    const page = ctx.query.page;
    const total = await ctx.service.news.total();
    const result = await this.service.news.getNewList(page);
    for (const item of result) {
      const creatTime = helper.formatTime(item.create_time);
      item.creatTime = creatTime;
    }
    if (result) {
      ctx.body = {
        status: 200,
        total,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '查询文章列表失败',
      };
    }
  }
}

module.exports = NewController;
