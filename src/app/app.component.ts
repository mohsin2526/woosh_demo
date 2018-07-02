import { Component } from '@angular/core';
import { Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';
import { NetworkProvider } from '../providers/network/network';
import { OneSignal } from '@ionic-native/onesignal';

import { LoginPage } from '../pages/login/login';
import { DispatcherPage } from '../pages/dispatcher/dispatcher';
// import { AuthMethodPage} from '../pages/auth-method/auth-method';
import { OtpchkProvider } from '../providers/otpchk/otpchk';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {  
  rootPage:any;
  rootPageParams: any;
  currentUser: any;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public events: Events, public network: Network,
              public networkProvider: NetworkProvider, private oneSignal: OneSignal, private opt: OtpchkProvider) {      
    platform.ready().then(() => {
      this.networkProvider.initializeNetworkEvents();
      // this.opt.logout;
      this.events.subscribe('network:offline', () => {
          alert('Please Check Internet Connection'+this.network.type);    
      });

    //   // Okay, so the platform is ready and our plugins are available.
    //   // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.oneSignal.startInit('d5eea8ce-f69c-41ef-b11b-fd401be11ca9', '721422296269');
      this.opt.getUser().then((user) => {
        this.currentUser = user;
        this.rootPageParams = {'phn': user }
        this.rootPage = user ? DispatcherPage : LoginPage;
      });      
      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
      this.oneSignal.endInit();
      this.oneSignal.getIds().then((id) => {
        localStorage.setItem("userid", JSON.stringify(id.userId));
      });      
    });
  }
  
}

