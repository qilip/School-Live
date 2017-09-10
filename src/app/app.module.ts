import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { DashboardPage } from '../pages/dashboard/dashboard';
import { TabsPage } from '../pages/tabs/tabs';
// 추가한 부분
import { AddTodoPage } from '../pages/add-todo/add-todo';
//import { TodoService } from '../pages/services/todo.service';
import { IonicStorageModule } from '@ionic/storage';

import { CalendarvPage } from '../pages/calendarv/calendarv';
import { NgCalendarModule } from 'ionic2-calendar';

import * as moment from 'moment';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { DataProvider } from '../providers/data/data';

@NgModule({
  declarations: [
    MyApp,
    DashboardPage,
    TabsPage,
    CalendarvPage,
    ItemDetailPage,
    AddTodoPage //추가한 부분
  ],
  imports: [
    NgCalendarModule, //추가한 부분2
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashboardPage,
    TabsPage,
    CalendarvPage,
    ItemDetailPage,
    AddTodoPage //추가된 부분
  ],
  providers: [
    StatusBar,
    //TodoService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
