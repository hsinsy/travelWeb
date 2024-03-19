import { inject } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { MemberService } from '@api/member-api/member.service';

export function authGuard(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) {
  const router = inject(Router);
  const memberService = inject(MemberService);
  const member = memberService.memberValue;
  if (member) {
    // authorised so return true
    return true;
  }

  // not logged in so redirect to login page with the return url
  router.navigate(['login'], {
    queryParams: { returnUrl: state.url },
  });
  return false;
}
