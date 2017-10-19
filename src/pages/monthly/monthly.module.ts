import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MonthlyPage } from './monthly';

@NgModule({
  declarations: [
    MonthlyPage,
  ],
  imports: [
    IonicPageModule.forChild(MonthlyPage),
  ],
})
export class MonthlyPageModule {}
