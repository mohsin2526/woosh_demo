import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FingerprintAIO ,FingerprintOptions} from '@ionic-native/fingerprint-aio';
import { HelperProvider } from '../../providers/helper/helper';
import { OtpchkProvider } from '../../providers/otpchk/otpchk';
//import { HomePage } from '../home/home';
import { SuccessPage } from '../success/success' ;

/**
 * Generated class for the FingerprintPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fingerprint',
  templateUrl: 'fingerprint.html',
})
export class FingerprintPage {
  fingerprintOptions : FingerprintOptions;
  user: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private faio: FingerprintAIO,
    private helper: HelperProvider, private opt: OtpchkProvider) {
      this.user = this.navParams.get('user');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FingerprintPage');
    setTimeout(
    this.showFingerprintAuthDlg(), 3000
    )
  }
  public showFingerprintAuthDlg(){
    this.faio.show({
      clientId: 'Fingerprint-Demo',
      clientSecret: 'password', // Only Android
      localizedFallbackTitle: 'Use Pin', // Only iOS
      localizedReason: 'Please authenticate' // Only iOS
    })
      .then((result: any) => {
        let data = {auth_medium: 'Fingre', phn: this.user.phn}        
        this.opt.addCustomerDetail(data).then((data) => {
          this.navCtrl.setRoot(SuccessPage, {msg: "You are Authenticated Successfully!"});
        });
      })
      .catch((error: any) => {
        this.helper.presentToast(error);
      }); 
}
}
