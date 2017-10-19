import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import * as moment from 'moment';

//import { TodoService } from '../services/todo.service';

@Component({
  selector: 'page-add-todo',
  templateUrl: 'add-todo.html',
})
export class AddTodoPage {
  /*
  newItem:string;
  mytodos:any[];
  */
  title;
  description;
  ends: String = moment(new Date().toISOString()).startOf('day').locale('ko').format();
  jungyo;
  noti;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              /*private todoService:TodoService*/
              public vc: ViewController) {
  }

  ionViewDidLoad() {
    //console.log('this.navParams.data.mytodos');
  }
  /*
  save(){
    this.mytodos = this.navParams.data.mytodos || [];
    this.mytodos.push(this.newItem);
    this.todoService.setTodos(this.mytodos).then(res=>{
      return console.log('New Todo(newItem) added');
    });
    this.navCtrl.pop();
  }
  */

  saveItem(){
    
        let newItem = {
    
          title: this.title,
          description: this.description,
          ends: this.ends,
          jungyo: this.jungyo,
          noti: this.noti
    
        };
    
        this.vc.dismiss(newItem);
    
      }
    
      close(){
        this.vc.dismiss();
      }
    

}
