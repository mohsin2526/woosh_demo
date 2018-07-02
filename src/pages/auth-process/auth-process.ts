import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FingerprintPage } from '../fingerprint/fingerprint';
/**
 * Generated class for the AuthProcessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-auth-process',
  templateUrl: 'auth-process.html',
})
export class AuthProcessPage {
  user: any;  
  finger: boolean = false;
  face: boolean = false;
  voice: boolean = false;
  authmsg: string;
  loggedIn: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = this.navParams.get('user');
    if(this.user.is_authed == 0) {
      this.finger = this.user.is_finger;
      this.face = this.user.is_face;
      this.voice = this.user.is_voice;
      this.authmsg = "";
    } else if(this.user.is_authed == 1) {
      this.authmsg = "You are Already Authenticated";
      this.loggedIn = true;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthProcessPage');
  }
  finer_auth() {
    this.navCtrl.setRoot(FingerprintPage, {user: this.user});
  }
  face_auth() {
    //this.navCtrl.setRoot(FaceauthPage);
  }
  voice_auth() {
    //this.navCtrl.setRoot(VoiceauthPage);
  }

}
