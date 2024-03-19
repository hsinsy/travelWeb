import { AccountService } from './../services/account.service';
import { inject } from '@angular/core';
import { HttpRequest, HttpHandlerFn } from '@angular/common/http';

import { environment } from '../../../../../environment/environment';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function jwtInterceptor(request: HttpRequest<any>, next: HttpHandlerFn) {
  // add auth header with jwt if user is logged in and request is to the api url
  const accountService = inject(AccountService);
  const user = accountService.userValue;
  const isLoggedIn = user?.token;
  const isApiUrl = request.url.startsWith(environment.appUrl);
  if (isLoggedIn && isApiUrl) {
    request = request.clone({
      setHeaders: { Authorization: `Bearer ${user.token}` },
    });
  }

  return next(request);
}
