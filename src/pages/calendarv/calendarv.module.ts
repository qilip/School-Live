import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarvPage } from './calendarv';

@NgModule({
  declarations: [
    CalendarvPage,
  ],
  imports: [
    IonicPageModule.forChild(CalendarvPage),
  ],
})
export class CalendarvPageModule {}
