import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AuthMethodPage } from  '../auth-method/auth-method';

/**
 * Generated class for the SelectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selection',
  templateUrl: 'selection.html',
})
export class SelectionPage {
  getMsg: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getMsg = this.navParams.get('msg');
  }
  authselection() {
    this.navCtrl.setRoot(AuthMethodPage);
  }
  gethome() {
    this.navCtrl.setRoot(HomePage);
  }
}
