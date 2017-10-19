import { Component } from '@angular/core';

import { DashboardPage } from '../dashboard/dashboard';

import { MonthlyPage } from '../monthly/monthly';


import { DailyPage } from '../daily/daily';
import { WeeklyPage } from '../weekly/weekly';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DashboardPage;
  tab2Root = DailyPage;
  tab3Root = WeeklyPage;
  tab4Root = MonthlyPage;

  constructor() {

  }
}
