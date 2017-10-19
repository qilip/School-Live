import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';

//추가
import { AddTodoPage } from '../add-todo/add-todo';
import { ItemDetailPage } from '../item-detail/item-detail';
//import { TodoService } from '../services/todo.service';
import { DataProvider } from '../../providers/data/data';
import * as moment from 'moment';

@Component({
  selector: 'page-home',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
/*
  mytodos: any[];
*/
  public items = [];
  public todaydate: String = moment(new Date().toISOString()).startOf('day').locale('ko').format();
  public d1date: String = moment(new Date().toISOString()).startOf('day').add(1, 'days').locale('ko').format();
  public d3date: String = moment(new Date().toISOString()).startOf('day').add(3, 'days').locale('ko').format();
  public d5date: String = moment(new Date().toISOString()).startOf('day').add(5, 'days').locale('ko').format();
  public d7date: String = moment(new Date().toISOString()).startOf('day').add(7, 'days').locale('ko').format();

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public dataService: DataProvider,
              /* private todoService:TodoService */) {
    /*            
    this.todoService.getTodos().then(res=>{
      this.mytodos = JSON.parse(res) || [];
  
    });
    */

    this.dataService.getData().then((todos) => {
      if(todos){
       this.items = JSON.parse(todos); 
     }
    });

  }
  // 끌어서 새로고침
  doRefresh(refresher) {
    this.dataService.getData().then((todos) => {
      if(todos){
       this.items = JSON.parse(todos); 
     }
    });
    refresher.complete();
  }

  ionViewDidLoad(){
      //this.dataService.clear();  DB 오류생겼을때 초기화
  }

/*
  goToAddTodoPage(){
    this.navCtrl.push(AddTodoPage, {mytodos:this.mytodos});
  }

  deleteItem(item){
    this.mytodos = this.mytodos.filter((res)=>res !== item);
    this.todoService.setTodos(this.mytodos).then(res=>{
      this.mytodos = JSON.parse(res) || [];
    });
  }
*/
addItem(){
  let addModal = this.modalCtrl.create(AddTodoPage);
  addModal.onDidDismiss((item) => {
        if(item){
         this.saveItem(item);
       }
  });
 addModal.present();
}

saveItem(item){
 this.items.push(item);
 this.dataService.save(this.items);
}

viewItem(item){
 /*
  this.navCtrl.push(ItemDetailPage, {
   item: item
 });
*/
var itemn = item;
 let addModal = this.modalCtrl.create(ItemDetailPage, {item: item});
 addModal.onDidDismiss((item) => {
       if(item){
        this.saveItem(item);
        this.deleteItem(itemn);
      }
 });
addModal.present();

}

deleteItem(item){
  this.items = this.items.filter((res)=>res !== item);
  this.dataService.setTodos(this.items).then(res=>{
    this.items = JSON.parse(res) || [];
  });
}

}
