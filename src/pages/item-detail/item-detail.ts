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
  starts: String = moment(new Date().toISOString()).locale('ko').format();
  ends: String = moment(new Date().toISOString()).locale('ko').format();

  constructor(public navCtrl: NavController, public navParams: NavParams, public vc:ViewController) {
  }
 
  ionViewDidLoad() {
    this.title = this.navParams.get('item').title;
    this.description = this.navParams.get('item').description;
    this.starts = this.navParams.get('item').starts;
    this.ends = this.navParams.get('item').ends;
  }

  saveItem(){
    
        let newItem = {
    
          title: this.title,
          description: this.description,
          starts: this.starts,
          ends: this.ends
    
        };
    
        this.vc.dismiss(newItem);
    
      }
    
      close(){
        this.vc.dismiss();
      }
    

}
