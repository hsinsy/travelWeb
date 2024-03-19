import { MemberService } from '@api/member-api/member.service';
import { Component, OnInit } from '@angular/core';
import { Member } from '@api/member-api/memberType';
import { CommonModule } from '@angular/common';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { MatButtonModule } from '@angular/material/button';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-userprofile',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    LocalizeRouterModule,
    RouterLinkActive,
    MatButtonModule,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  member!: Member;
  cookieValue = '';

  constructor(
    private memberService: MemberService,
    private route: ActivatedRoute,
    private router: Router,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    this.isMemberInCookie();
  }

  isMemberInCookie() {
    if (this.cookieService.get('memberId')) {
      this.cookieValue = this.cookieService.get('memberId');
      this.memberService.getMemberByID(this.cookieValue).subscribe(
        (member: Member) => {
          this.member = member;
        },
        (error) => {
          console.error('Error fetching user details:', error);
        }
      );

      this.router.navigate(['/zh-TW/profiles/' + this.cookieValue]);
    } else {
      this.router.navigate(['/zh-TW/login']);
    }
  }

  goToOrders(): void {
    if (this.member.memberId) {
      this.router.navigate([`/zh-TW/orders/${this.member.memberId}`]);
    } else {
      this.router.navigate([`/zh-TW/noorders`]);
    }
  }
}
