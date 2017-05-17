import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.navCtrl = navCtrl;
    this.alertCtrl = alertCtrl;
  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Notice! <br><br>',
      subTitle: 'App developed by Azeez Adigun <br><br>Skype: Azemighty<br><br>WhatsApp: +2347038797386<br><br> Kind Regards, Ejalee',
      buttons: ['OK']
    });
    alert.present();
  }

  phone(number) {
    window.open("tel:" + number);
  }
  email(address) {
    window.open("mailto:" + address);
  }
  facebook(profile) {
    window.open("https://" + profile);
  }
  twitter(handle) {
    window.open("https://" + handle);
  }
  linkedin(inpage) {
    window.open("https://" + inpage);
  }
  google(gpage) {
    window.open("https://" + gpage);
  }
  instagram(instapage) {
    window.open("https://" + instapage);
  }

}
