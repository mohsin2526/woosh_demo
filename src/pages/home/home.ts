import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { Validators, FormBuilder, FormGroup } from '@angular/forms';
//import { AuthMethodPage } from  '../auth-method/auth-method';
//import { OtpchkProvider } from '../../providers/otpchk/otpchk';
//import { HelperProvider } from '../../providers/helper/helper';
// import { GooglePlus } from '@ionic-native/google-plus';
// import { Facebook } from '@ionic-native/facebook';
//import { LoginPage } from  '../login/login';
// import { SMS } from '@ionic-native/sms';
// import { LocalNotifications } from '@ionic-native/local-notifications';
// import { OneSignal } from '@ionic-native/onesignal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // private register : FormGroup;
  error: String;
  // displayName: any;
  // email: any;
  // familyName: any;
  // givenName: any;
  // userId: String;
  // imageUrl: any;
  // users: any;
  // isLoggedIn:boolean = false;
  constructor(public navCtrl: NavController,          
       // private googlePlus: GooglePlus,     // private fb: Facebook,     
  ) {          

  }
 
  // fblogin() {
  //   this.fb.login(['public_profile', 'email'])
  //     .then(res => {
  //       if(res.status === "connected") {
  //         this.getUserDetail(res.authResponse.userID);
  //       } else {
  //         this.isLoggedIn = false;
  //       }
  //     })
  //     .catch(e => console.log('Error logging into Facebook', e));
  // }
  // fblogout() {
  //   this.fb.logout()
  //     .then( res => this.isLoggedIn = false)
  //     .catch(e => console.log('Error logout from Facebook', e));
  // }
  // getUserDetail(userid) {
  //   this.fb.api("/"+userid+"/?fields=id,first_name,last_name,email,name,picture,gender",["public_profile"])
  //     .then(res => {
  //       // console.log(res);
  //       this.register.get('firstname').setValue((res.first_name == "null")? "" : res.first_name);
  //       this.register.get('lastname').setValue((res.last_name == "null")? "" :res.last_name);
  //       this.register.get('email').setValue(res.email);
  //       this.fblogout();
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // }
  // login() {    
  //   this.googlePlus.login({})
  //     .then(res => {
  //       // console.log(res);
  //       // this.displayName = res.displayName;
  //       // this.email = res.email;
  //       // this.familyName = res.familyName;
  //       // this.givenName = res.givenName;
  //       // this.userId = res.userId;
  //       // this.imageUrl = res.imageUrl;
  //       this.register.get('firstname').setValue((res.givenName == "null")? "" : res.givenName);
  //       this.register.get('lastname').setValue((res.familyName == "null")? "" :res.familyName);
  //       this.register.get('email').setValue(res.email);
  //       this.logout();
  //     })
  //     .catch(err => alert(err));
  // }
  // logout() {
  //   this.googlePlus.logout()
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(err => console.error(err));
  // }  

}
