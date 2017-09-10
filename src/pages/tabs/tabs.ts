import { Component } from '@angular/core';

import { DashboardPage } from '../dashboard/dashboard';

//추가
import { AddTodoPage } from '../add-todo/add-todo';
import { CalendarvPage } from '../calendarv/calendarv';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DashboardPage;
  tab2Root = AddTodoPage;
  tab3Root = CalendarvPage;

  constructor() {

  }
}
