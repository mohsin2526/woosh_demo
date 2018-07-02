import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FaceauthPage } from './faceauth';

@NgModule({
  declarations: [
    FaceauthPage,
  ],
  imports: [
    IonicPageModule.forChild(FaceauthPage),
  ],
})
export class FaceauthPageModule {}
