import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuthMethodPage } from './auth-method';

@NgModule({
  declarations: [
    AuthMethodPage,
  ],
  imports: [
    IonicPageModule.forChild(AuthMethodPage),
  ],
})
export class AuthMethodPageModule {}
