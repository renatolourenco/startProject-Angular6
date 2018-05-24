import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private cookieService: CookieService) { }

  setCookie(anything) {
    const today = new Date();
    const expiresValue: Date = new Date(today);
    expiresValue.setMinutes(today.getMinutes() + 5);

    this.cookieService.set('anything', anything, expiresValue);
  }

  getCookie() {
    console.log(this.cookieService.get('anything'));
    return this.cookieService.get('anything');
  }

}
