import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Storage} from "@ionic/storage";

/*
  Generated class for the OtpchkProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OtpchkProvider {
  apiUrl = 'https://portal.woosh.ai/api/customer';
  signApi = 'https://portal.woosh.ai/api';
  isLoggedIn: Boolean;
    user: any;   

  constructor(public http: HttpClient, public storage: Storage) {
    console.log('Hello RestProvider Provider');
  }
  login(phone) {
    return this.storage.set('user', phone).then(() => {
        this.isLoggedIn = true;
        this.user = phone;
    });

}

logout() {
    this.storage.remove('user').then(() => {
        this.isLoggedIn = false;
        this.user = null;
    });

}

isAuthenticated() {
    return this.isLoggedIn;
}

getUser() {
    return this.storage.get('user')
}
  // getUsers() {
  //   return new Promise(resolve => {
  //     this.http.get(this.apiUrl+'/users').subscribe(data => {
  //       resolve(data);
  //     }, err => {
  //       console.log(err);
  //     });
  //   });
  // }
  getmailchk(data) {
    return new Promise(resolve => {
      this.http.post(this.signApi+'/mailchk', data).subscribe(data => {
        resolve(data);
      }, err => {
        resolve(err);
      });
    });
  }

  getTokenResult(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.signApi+'/signup', data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          if(err.status == 404){
            resolve(404);
          } else {
            reject(err);
          }
        });
    });
  }
  addCustomerDetail(data) {
    // console.log(data)
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/add_auth', data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          if(err.status == 404){
            resolve(404);
          } else {
            reject(err);
          }
        });
    });    
  }   
}
