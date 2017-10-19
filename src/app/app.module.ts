import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { DashboardPage } from '../pages/dashboard/dashboard';
import { TabsPage } from '../pages/tabs/tabs';
// 추가한 부분
import { AddTodoPage } from '../pages/add-todo/add-todo';
import { MonthlyPage } from '../pages/monthly/monthly';

//
import { DailyPage } from '../pages/daily/daily';
import { WeeklyPage } from '../pages/weekly/weekly';

//import { TodoService } from '../pages/services/todo.service';
import { IonicStorageModule } from '@ionic/storage';
//lagacy calendar
import { NgCalendarModule } from 'ionic2-calendar';

import * as moment from 'moment';
//lagacy calendar

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { DataProvider } from '../providers/data/data';

@NgModule({
  declarations: [
    MyApp,
    DashboardPage,
    TabsPage,
    ItemDetailPage,
    AddTodoPage, //추가한 부분
    MonthlyPage,
    WeeklyPage,
    DailyPage
  ],
  imports: [
    NgCalendarModule, //추가한 부분2
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    CalendarModule.forRoot(),
    BrowserAnimationsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashboardPage,
    TabsPage,
    ItemDetailPage,
    AddTodoPage, //추가된 부분
    MonthlyPage,
    WeeklyPage,
    DailyPage
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
