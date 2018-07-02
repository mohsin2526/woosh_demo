import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConfigProvider {
  apiUrl = 'https://portal.woosh.ai/api';
  isLoggedIn:boolean = false;
  phn: string;
  constructor(public http: HttpClient) {
    console.log('Hello ConfigProvider Provider');
  }
  pageSelection(data) {
    return new Promise(resolve => {
      this.http.post(this.apiUrl+'/authchk', data).subscribe(data => {
        resolve(data);
      }, err => {
        resolve(err);
      });
    });
  }
  insertmethod(data) {
    console.log(data)
    return new Promise(resolve => {
      this.http.post(this.apiUrl+'/updateAuth', data).subscribe(data => {
        resolve(data);
      }, err => {
        resolve(err);
      });
    });
  }

}
