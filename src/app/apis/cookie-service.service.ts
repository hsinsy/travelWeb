import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class CookieServiceService {
  constructor(private cookieService: CookieService) {}

  // set member info in cookies
  setCookie(memberID: string) {
    this.cookieService.set('memberID', memberID);
  }
}
