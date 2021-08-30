// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportChoose = require('../../../app/service/choose');
import ExportHome = require('../../../app/service/home');
import ExportNews = require('../../../app/service/news');
import ExportRecruit = require('../../../app/service/recruit');

declare module 'egg' {
  interface IService {
    choose: AutoInstanceType<typeof ExportChoose>;
    home: AutoInstanceType<typeof ExportHome>;
    news: AutoInstanceType<typeof ExportNews>;
    recruit: AutoInstanceType<typeof ExportRecruit>;
  }
}
