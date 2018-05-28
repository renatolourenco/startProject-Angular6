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

    this.cookieService.set('userData', anything, expiresValue);
  }

  getCookie() {
    let cookie = this.cookieService.get('userData');
    if (cookie !== '') {
      this.setCookie(cookie);
      cookie = JSON.parse(this.cookieService.get('userData'));
    }
    console.log(cookie);
    return cookie;
  }

}
