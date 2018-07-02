import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuthProcessPage } from './auth-process';

@NgModule({
  declarations: [
    AuthProcessPage,
  ],
  imports: [
    IonicPageModule.forChild(AuthProcessPage),
  ],
})
export class AuthProcessPageModule {}
