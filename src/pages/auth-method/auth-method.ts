import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { Storage } from '@ionic/storage';
import { FingerauthPage } from '../fingerauth/fingerauth';
import { FaceauthPage } from '../faceauth/faceauth';
import { VoiceauthPage } from '../voiceauth/voiceauth';
// import { ConfigProvider } from '../../providers/config/config';
// import { AuthProcessPage } from '../auth-process/auth-process';
/**
 * Generated class for the AuthMethodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-auth-method',
  templateUrl: 'auth-method.html',
})
export class AuthMethodPage {
  code: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {    
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthMethodPage');    
  }
  finer_auth() {
    this.navCtrl.setRoot(FingerauthPage);
  }
  face_auth() {
    this.navCtrl.setRoot(FaceauthPage);
  }
  voice_auth() {
    this.navCtrl.setRoot(VoiceauthPage);
  }
}
