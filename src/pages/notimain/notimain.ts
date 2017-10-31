import { Component } from '@angular/core';
import { NavController, Platform, AlertController, IonicPage, ViewController, NavParams } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';
import * as moment from 'moment';

/**
 * Generated class for the NotimainPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notimain',
  templateUrl: 'notimain.html',
})
export class NotimainPage {

  notifyTime: any;
  notifications: any[] = [];
  days: any[];
  chosenHours: number;
  chosenMinutes: number;

  constructor(public navCtrl: NavController, public platform: Platform, public alertCtrl: AlertController, public localNotifications: LocalNotifications, public navParams: NavParams, public vc:ViewController) {

      this.notifyTime = moment(new Date().toISOString()).locale('ko').format();

      this.chosenHours = new Date().getHours();
      this.chosenMinutes = new Date().getMinutes();

      this.days = [
          {title: '월요일', dayCode: 1, checked: false},
          {title: '화요일', dayCode: 2, checked: false},
          {title: '수요일', dayCode: 3, checked: false},
          {title: '목요일', dayCode: 4, checked: false},
          {title: '금요일', dayCode: 5, checked: false},
          {title: '토요일', dayCode: 6, checked: false},
          {title: '일요일', dayCode: 0, checked: false}
      ];

  }

  close(){
    this.vc.dismiss();
  }

  ionViewDidLoad(){

  }

  timeChange(time){
    this.chosenHours = time.hour.value;
    this.chosenMinutes = time.minute.value;
}

addNotifications(){
  
     let currentDate = new Date();
     let currentDay = currentDate.getDay(); // Sunday = 0, Monday = 1, etc.
  
     for(let day of this.days){
  
         if(day.checked){
  
             let firstNotificationTime = new Date();
             let dayDifference = day.dayCode - currentDay;
  
             if(dayDifference < 0){
                 dayDifference = dayDifference + 7; // for cases where the day is in the following week
             }
  
             firstNotificationTime.setHours(firstNotificationTime.getHours() + (24 * (dayDifference)));
             firstNotificationTime.setHours(this.chosenHours);
             firstNotificationTime.setMinutes(this.chosenMinutes);
  
             let notification = {
                 id: day.dayCode,
                 title: 'StudyTracker',
                 text: '공부 알림입니다. 앱을 확인해주세요',
                 at: firstNotificationTime,
                 every: 'week'
             };
  
             this.notifications.push(notification);
  
         }
  
     }
  
     console.log("알림이 다음 시간에 설정됨: ", this.notifications);
  
     if(this.platform.is('cordova')){
  
         // Cancel any existing notifications
         this.localNotifications.cancelAll().then(() => {
  
             // Schedule the new notifications
             this.localNotifications.schedule(this.notifications);
  
             this.notifications = [];
  
             let alert = this.alertCtrl.create({
                 title: '알림이 설정되었습니다',
                 buttons: ['확인']
             });
  
             alert.present();
  
         });
  
     }
  
 }

 cancelAll(){
  
     this.localNotifications.cancelAll();
  
     let alert = this.alertCtrl.create({
         title: '알림이 삭제되었습니다',
         buttons: ['확인']
     });
  
     alert.present();
  
 }

}

