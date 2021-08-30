'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/about', controller.about.index);
  router.get('/news', controller.news.index);
  router.get('/newsDetail', controller.news.detail);
  router.get('/book', controller.book.index);
  router.get('/person', controller.person.index);
  router.get('/choose', controller.choose.index);
  router.get('/recruitment', controller.recruitment.index);
  router.get('/newsList', controller.news.newsList);
  router.get('/recruitList', controller.recruitment.recruitList);
};
