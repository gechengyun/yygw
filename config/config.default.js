/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1594969307508_8455';

  // add your middleware config here
  config.middleware = [];
  // 配置模版引擎
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };
  // logger
  // config.logger = {
  //   dir: '/root/egg/logs',
  // };
  // 配置mysql
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      // host: 'rm-bp1ie74hx87v5q4md2o.mysql.rds.aliyuncs.com', // 外网
      // host: 'rm-bp1ie74hx87v5q4md.mysql.rds.aliyuncs.com', // 内网
      host: '172.27.13.109',
      // 端口号
      port: '33891',
      // 用户名
      user: 'root',
      // 密码
      password: 'Yigou2020#',
      // 数据库名
      database: 'ry',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  config.api = 'http://172.27.13.110:8080/';
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
