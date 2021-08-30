// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAbout = require('../../../app/controller/about');
import ExportBook = require('../../../app/controller/book');
import ExportChoose = require('../../../app/controller/choose');
import ExportHome = require('../../../app/controller/home');
import ExportNews = require('../../../app/controller/news');
import ExportPerson = require('../../../app/controller/person');
import ExportRecruitment = require('../../../app/controller/recruitment');

declare module 'egg' {
  interface IController {
    about: ExportAbout;
    book: ExportBook;
    choose: ExportChoose;
    home: ExportHome;
    news: ExportNews;
    person: ExportPerson;
    recruitment: ExportRecruitment;
  }
}
