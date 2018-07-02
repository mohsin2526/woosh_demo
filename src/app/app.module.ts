import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { FingerauthPage } from '../pages/fingerauth/fingerauth';
import { FaceauthPage } from '../pages/faceauth/faceauth';
import { VoiceauthPage } from '../pages/voiceauth/voiceauth';
import { FingerprintPage } from '../pages/fingerprint/fingerprint';
import { AuthMethodPage } from '../pages/auth-method/auth-method';
import { SelectionPage } from '../pages/selection/selection';
import { AuthProcessPage } from '../pages/auth-process/auth-process';
import { DispatcherPage } from '../pages/dispatcher/dispatcher' ;
import { SuccessPage } from '../pages/success/success' ;
import { OtpchkProvider } from '../providers/otpchk/otpchk';
import { HttpClientModule } from '@angular/common/http';
import { NetworkProvider } from '../providers/network/network';
import { Network } from '@ionic-native/network';
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook } from '@ionic-native/facebook';
import { SMS } from '@ionic-native/sms';
import { ConfigProvider } from '../providers/config/config';
import { HelperProvider } from '../providers/helper/helper';
import { IonicStorageModule } from '@ionic/storage';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { OneSignal } from '@ionic-native/onesignal';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    AuthMethodPage,
    FaceauthPage,
    FingerauthPage,
    VoiceauthPage,
    FingerprintPage,
    SelectionPage,
    AuthProcessPage,
    DispatcherPage,
    SuccessPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    AuthMethodPage,
    FaceauthPage,
    FingerauthPage,
    VoiceauthPage,
    FingerprintPage,
    SelectionPage,
    AuthProcessPage,
    DispatcherPage,
    SuccessPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Network,    
    OtpchkProvider,
    NetworkProvider,
    GooglePlus,
    Facebook,
    SMS,
    ConfigProvider,
    HelperProvider,
    OneSignal,
    LocalNotifications,
    FingerprintAIO,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
