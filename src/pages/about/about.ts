import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.navCtrl = navCtrl;
    this.alertCtrl = alertCtrl;
  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Appreciation! <br><br>',
      subTitle: 'We appreciate your coming to this edition of our Bootcamp<br><br>Best Regards,<br><br>Ayoola Falola,<br>Founder, PageCarton ',
      buttons: ['OK']
    });
    alert.present();
  }

  about = [
    { description: "PageCarton is a Content Management System that is good for all beautiful reasons. Good for websites, blogs, online stores and other web applications. Used and loved by designers, programmers, CEOs and adventurers." },
    { description: "This project was designed and implemented by 'PageCarton Bootcamp attendants." },
    { description: "The aformentioned attendants produced a record breaking Geek, in person of 'Jalasem' attaining a redesign of pagecarton's homepage in 3.16mins " },
    { description: "The aformentioned bootcamp had the presence of Avalanche Nigeria CEO in person of Mr Tolulope Ogundiji, leading the conversation on entrepreneurship." },
    { description: "The aformentioned bootcamp was lastly driven by the 'PageCarton agenda', which is to create a CMS enabled website seamlessly using PageCarton's package! The session was  spearheaded by Ayoola Falola, the product owner" },
  ];

  portfolio = [
    { title: "Portfolio", folio: " The bootcamp had in attendance professional 'Web Developers', 'Desktop Application Developers', 'API Designers', 'Mobile Application Developers','System Analysts', 'Sytem Enginners', 'Database Administrators', 'Graphic Designers', 'Entrepreneurs'." }
  ];

}
