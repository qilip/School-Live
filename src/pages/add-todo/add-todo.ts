import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TodoService } from '../services/todo.service';

@Component({
  selector: 'page-add-todo',
  templateUrl: 'add-todo.html',
})
export class AddTodoPage {
  newItem:string;
  mytodos:any[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private todoService:TodoService) {
  }

  ionViewDidLoad() {
    console.log('this.navParams.data.mytodos');
  }
  save(){
    this.mytodos = this.navParams.data.mytodos || [];
    this.mytodos.push(this.newItem);
    this.todoService.setTodos(this.mytodos).then(res=>{
      return console.log('New Todo(newItem) added');
    });
    this.navCtrl.pop();
  }

}
