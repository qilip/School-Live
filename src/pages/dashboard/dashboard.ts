import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//추가
import { AddTodoPage } from '../add-todo/add-todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'page-home',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
  mytodos: any[];
  constructor(public navCtrl: NavController,
              private todoService:TodoService) {
    this.todoService.getTodos().then(res=>{
      this.mytodos = JSON.parse(res) || [];
    });
  }

  goToAddTodoPage(){
    this.navCtrl.push(AddTodoPage, {mytodos:this.mytodos});
  }

  deleteItem(item){
    this.mytodos = this.mytodos.filter((res)=>res !== item);
    this.todoService.setTodos(this.mytodos).then(res=>{
      this.mytodos = JSON.parse(res) || [];
    });
  }

}
