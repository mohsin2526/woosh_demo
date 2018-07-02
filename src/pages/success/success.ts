import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the SuccessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-success',
  templateUrl: 'success.html',
})
export class SuccessPage {
  getMsg: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getMsg = this.navParams.get('msg');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuccessPage');
  }
  homepage() {
    this.navCtrl.setRoot(HomePage);
  }

}
