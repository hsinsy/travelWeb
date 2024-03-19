import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, NgClass, NgIf } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MemberService } from '@api/member-api/member.service';
import { MatButtonModule } from '@angular/material/button';
import { IntervalBlockComponent } from '../../shared/interval-block/interval-block.component';
import { Member } from '@api/member-api/memberType';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [
    ReactiveFormsModule,
    NgClass,
    NgIf,
    RouterLink,
    RouterLinkActive,
    MatButtonModule,
    IntervalBlockComponent,
    CommonModule,
    LocalizeRouterModule,
  ],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;
  error?: string;
  success?: string;
  hide = false;
  cookieService = inject(CookieService);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private memberService: MemberService
  ) {}

  // redirect to home if already logged in
  //if (this.accountService.userValue) {
  //this.router.navigate(['/']);
  //}

  ngOnInit() {
    this.form = this.formBuilder.group({
      memberAccount: ['', Validators.required],
      memberPassword: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.loading = true;

    console.log('submit: ');
    console.log(
      this.f['memberAccount'].value + ' | ' + this.f['memberPassword'].value
    );

    this.memberService
      .getMember(this.f['memberAccount'].value, this.f['memberPassword'].value)
      .subscribe({
        next: (member: Member) => {
          this.cookieService.set('memberId', member.memberId!);

          if (
            this.f['memberAccount'].value === 'admin' &&
            this.f['memberPassword'].value === 'admin12345'
          ) {
            this.router.navigate([`/zh-TW/admin`]);
          } else {
            this.router.navigate(['/zh-TW/profiles/' + member.memberId]);
          }
        },
        error: (error) => {
          this.error = error;
          this.loading = false;
        },
      });
  }
}
