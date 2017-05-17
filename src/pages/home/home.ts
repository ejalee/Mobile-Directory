import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Attendees } from '../attendees/attendees';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl;
  }

  attendees() {
    this.navCtrl.push(Attendees);
  }

}
