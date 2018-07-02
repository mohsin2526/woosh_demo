import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ConfigProvider } from '../../providers/config/config';
import { AuthProcessPage } from '../auth-process/auth-process';
import { AuthMethodPage } from '../auth-method/auth-method';
/**
 * Generated class for the DispatcherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dispatcher',
  templateUrl: 'dispatcher.html',
})
export class DispatcherPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private config: ConfigProvider) {
    this.storage.get('user').then((user) => {
      let data = { phn: user}
      this.config.pageSelection(data).then(data => {
        if(data['isAuthed'] == 0){
          this.navCtrl.setRoot(AuthMethodPage);
        }
        else if(data['isAuthed'] == 1) {
          // if(data['user'].is_authed == 0){
            this.navCtrl.setRoot(AuthProcessPage, {user: data['user']});
          // } else if(data['user'].is_authed == 1) {
          //   this.navCtrl.
          // }
        }
      })
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DispatcherPage');
  }

}
