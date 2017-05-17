import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Attendant } from '../attendant/attendant';

/**
 * Generated class for the Attendees page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-attendees',
  templateUrl: 'attendees.html',
})
export class Attendees {
  searchQuery: string = ' ';
  attendees: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeAttendees();
  }

  initializeAttendees() {
    this.attendees = [
      { name: "AYOOLA FALOLA", email: "info@pagecarton.org", phone: "+2348162081195", nick: "Ayoo.la", picture: "assets/img/colleagues/ayoola.jpg", hobby: "PageCarton", Quote: "Joy unspeakable", FB: "https://www.facebook.com/AyoolaFalola", TW: "https://twitter.com/ayoolafalola", LinkedIN: "https://ng.linkedin.com/in/" },
      { name: "AZEEZ ADIGUN A.", email: "adigunazeez@gmail.com", phone: "+2347038797386", nick: "Ejalee", picture: "assets/img/colleagues/ejalee.jpg", hobby: "Internet surfing vs IOT", Quote: "Que Sera Sera", FB: "https://facebook.com/azemighty", TW: "https://twitter.com/iamejalee", LinkedIN: "https://ng.linkedin.com/in/azeezadigun" },
      { name: "KAMALDEEN YUSUF K.", email: "devyousefk@gmail.com", phone: "+2348134163746", nick: "Yousef", picture: "assets/img/colleagues/yousef.jpg", hobby: "Web Development", Quote: "It's technology or nufin like seriously!", FB: "https://www.facebook.com/kyussuf1", TW: "https://twitter.com/devyouefk", LinkedIN: "https://ng.linkedin.com/in/kenkarma" },
      { name: "ABDUL-SEMI AJALA", email: "kgasta@gmail.com", phone: "+2348168861541", nick: "Jalasem", picture: "assets/img/colleagues/jalasem.jpg", hobby: "", Quote: "Give physically challenged people a chance", FB: "https://www.facebook.com/Jalasem", TW: "https://twitter.com/jalasem", LinkedIN: "https://ng.linkedin.com/in/jalasem" },
      { name: "OLUMOLE ADENIYI", email: "neeyoo2525@gmail.com", phone: "+2348134163746", nick: "Neeyo", picture: "assets/img/colleagues/niyi.jpg", hobby: "", Quote: "Rat wey get only one hole, na im dey quick die", FB: "https://www.facebook.com/olumole.adeniyi", TW: "https://twitter.com/@", LinkedIN: "https://ng.linkedin.com/in/" },
      { name: "OLOKO OLATUNJI A.", email: "olulawotolu@yahoo.com", phone: "+2348027779987", nick: "Tuneji", picture: "assets/img/colleagues/tunji.jpg", hobby: "", Quote: "Hello 2017, am ready for you", FB: "https://www.facebook.com/olatunji.oloko", TW: "https://twitter.com/tuneji_suave", LinkedIN: "https://ng.linkedin.com/in/" },
      { name: "OLA OTINWA", email: "olaotinwa@gmail.com", phone: "+2348023848098", nick: "Ola Otinwa", picture: "assets/img/colleagues/olaotinwa.jpg", hobby: "", Quote: "", FB: "https://www.facebook.com/olaotinwa", TW: "https://twitter.com/olaotinwa", LinkedIN: "https://ng.linkedin.com/in/" },
      { name: "OLUFUNMILAYO DARE", email: "ezekiel.dare@gmail.com", phone: "+2347031361084", nick: "Dreey", picture: "assets/img/colleagues/dare.jpg", hobby: "", Quote: "Rat wey get only one hole, na im dey quick die", FB: "https://www.facebook.com/ezeikel.dare", TW: "https://twitter.com/@", LinkedIN: "https://ng.linkedin.com/in/" },
      { name: "AKINJOBI SODIQ", email: "vip@erupt.online", phone: "+2348186609399", nick: "Sodiq", picture: "assets/img/colleagues/sodiq.jpg", hobby: "", Quote: "Hello 2017, am ready for you", FB: "https://www.facebook.com/sodson11", TW: "https://twitter.com/geektutor", LinkedIN: "https://ng.linkedin.com/in/" },
      { name: "BANJO RASAQ", email: "rasban037@yahoo.com", phone: "+2348104648699", nick: "RasBan037", picture: "assets/img/colleagues/banjo.jpg", hobby: "", Quote: "Hello 2017, am ready for you", FB: "https://www.facebook.com/RasBan037", TW: "https://twitter.com/RasBan037", LinkedIN: "https://ng.linkedin.com/in/" },
      { name: "IBIWOYE MONSURAH", email: "bukola_monsurah@yahoo.com", phone: "+2348167109264", nick: "Monsurah", picture: "assets/img/colleagues/monsurat.jpg", hobby: "", Quote: "Hello 2017, am ready for you", FB: "https://www.facebook.com/ibiwoye.monsurat1", TW: "https://twitter.com/", LinkedIN: "https://ng.linkedin.com/in/" },
      { name: "OLUEGUN RAPHAEL", email: "seg207@gmail.com", phone: "+2348033577433", nick: "Ralph", picture: "assets/img/colleagues/raph.jpg", hobby: "", Quote: "Hello 2017, am ready for you", FB: "https://www.facebook.com/unclesege", TW: "https://twitter.com/", LinkedIN: "https://ng.linkedin.com/in/" }
    ];

  }

  getAttendees(ev: any) {
    // Reset items back to all of the items
    this.initializeAttendees();

    // set val to the value of the searchbar
    var val = ev.target.value;

    if (!val) {
      return;
    }
    this.attendees = this.attendees.filter((v) => {
      if (v.name && val) {
        if (v.name.toLowerCase().indexOf(val.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });

  }

  attendant(attendee) {
    this.navCtrl.push(Attendant, { attendee: attendee });
  }



}
