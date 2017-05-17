import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Attendant } from './attendant';

@NgModule({
  declarations: [
    Attendant,
  ],
  imports: [
    IonicPageModule.forChild(Attendant),
  ],
  exports: [
    Attendant
  ]
})
export class AttendantModule { }
