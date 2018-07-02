import { Component, ViewChild } from '@angular/core';
import { ModalController, IonicPage, NavController, NavParams  } from 'ionic-angular';
import { OtpchkProvider } from '../../providers/otpchk/otpchk';
import { HelperProvider } from '../../providers/helper/helper';
import { DispatcherPage } from  '../dispatcher/dispatcher';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
//import { Storage } from '@ionic/storage';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('otpcode')otpcode: string;
  users: any;
  error: String;
  digit: String = '';
  otp_val: string;
  private register : FormGroup;
  phone: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private otp: OtpchkProvider, 
               private formBuilder: FormBuilder,private helper: HelperProvider,
               public modalCtrl: ModalController) {
    // this.users = navParams.get('data');
    // this.otp_val = navParams.get('val_otp');
    this.register = this.formBuilder.group({
      phone: ['', Validators.required],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  submitForm(){     
    // this.navCtrl.setRoot(AuthMethodPage);        
    if(this.register.valid){
      let form_data = this.register.value;
      // let otp_val = Math.floor(Math.random()*900000) + 100000; 
      let data = {email : form_data.phone, code: localStorage.getItem("userid")};
      // console.log(data);
      this.otp.getmailchk(data)
      .then(data => {
         if(data['status'] == 200){
           this.otp.login(form_data.phone);
           this.navCtrl.setRoot(DispatcherPage);
         } else {
          this.error = 'Sorry, Phone Number is not Registered';
          this.helper.presentToast("Sorry, Phone Number is not Registered");
         }
      })
    }
  } 
  token = {}
  // logForm(get_val) {    
  //   // localStorage.setItem('token', this.token['token']);
  //   if(!get_val) {
  //     this.helper.presentToast("Please enter Valid Code");
  //    } else {
  //      if(this.otp_val == get_val) {
  //         this.getResult(this.users, this.otp_val);
  //      } else {
  //       this.helper.presentToast("OTP code Mismatch");
  //      }
  //   }
  //   //this.navCtrl.setRoot(HomePage);
  // }
  // getResult(user, code) {
  //   let data = {name: user.firstname +" "+user.lastname, email: user.email, phn: user.mobile};
  //   // console.log(data);
  //   this.otp.getTokenResult(data)
  //   .then(data => {
  //     // console.log(data);
  //      if(data['status'] == 200){
  //       //  console.log(data);
  //        this.storage.set('signup_code', data['code']);
  //        this.navCtrl.setRoot(AuthMethodPage, {
  //          code: data['code']
  //        });
  //       //this.navCtrl.setRoot(LoginPage);
  //      } else {
  //       this.helper.presentToast("Sorry, Provided Token is Invalid");
  //      }
  //   })
  // }
  // presentProfile() {
  //   console.log("here it is");
  //   let profileModal = this.modalCtrl.create(Profile, { userId: 8675309 });
  //   profileModal.onDidDismiss(data => {
  //     console.log(data);
  //   });
  //   profileModal.present();
  // }
 
}

