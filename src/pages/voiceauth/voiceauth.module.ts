import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VoiceauthPage } from './voiceauth';

@NgModule({
  declarations: [
    VoiceauthPage,
  ],
  imports: [
    IonicPageModule.forChild(VoiceauthPage),
  ],
})
export class VoiceauthPageModule {}
