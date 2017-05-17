import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Attendant page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-attendant',
  templateUrl: 'attendant.html',
})
export class Attendant {
  attendee;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.attendee = navParams.data.attendee;
  }

  goBack() {
    this.navCtrl.pop();
  }

}
