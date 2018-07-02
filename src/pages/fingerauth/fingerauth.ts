import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
//import { FingerprintPage } from '../fingerprint/fingerprint';
import { SelectionPage } from '../selection/selection';
import { ConfigProvider } from '../../providers/config/config';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the FingerauthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fingerauth',
  templateUrl: 'fingerauth.html',
})
export class FingerauthPage {
  value: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private faio: FingerprintAIO,
              private config: ConfigProvider, public storage: Storage) {
  }

  openvoicepopPage(){
    if(this.value == true){
      this.faio.show({
        clientId: 'Fingerprint-Demo',
        clientSecret: 'password', // Only Android
        localizedFallbackTitle: 'Use Pin', // Only iOS
        localizedReason: 'Please authenticate' // Only iOS
      })
        .then((result: any) => {
          this.storage.get('user').then((user) => {
            let data = {phn: user, auth_col: 'is_finger', auth_col_val: 1}
            this.config.insertmethod(data);
          })
          this.navCtrl.setRoot(SelectionPage, {msg: "Your Finger Auth Has been successfully Registered with Woosh"});                    
        })
        .catch((error: any) => {
          this.navCtrl.setRoot(SelectionPage, {msg: error});          
        });               
    } else if(this.value == false) {
      this.navCtrl.setRoot(SelectionPage, {msg: "Fingerprint Auth is Off"});
    }    
    //this.navCtrl.setRoot(FingerprintPage);
  }


}
