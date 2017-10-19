import { Component } from '@angular/core';
import { IonicPage,ViewController, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
})
export class ItemDetailPage {

  title;
  description;
  ends: String = moment(new Date().toISOString()).locale('ko').format();
  jungyo;
  noti;

  constructor(public navCtrl: NavController, public navParams: NavParams, public vc:ViewController) {
  }
 
  ionViewDidLoad() {
    this.title = this.navParams.get('item').title;
    this.description = this.navParams.get('item').description;
    this.ends = this.navParams.get('item').ends;
    this.jungyo = this.navParams.get('item').jungyo;
    this.noti = this.navParams.get('item').noti;
  }

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
