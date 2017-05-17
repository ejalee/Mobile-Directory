import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Attendees } from './attendees';

@NgModule({
  declarations: [
    Attendees,
  ],
  imports: [
    IonicPageModule.forChild(Attendees),
  ],
  exports: [
    Attendees
  ]
})
export class AttendeesModule { }
