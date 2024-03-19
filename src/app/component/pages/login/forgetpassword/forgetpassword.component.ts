import { MemberService } from '@api/member-api/member.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatButtonModule],
})
export class ForgetPasswordComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  error?: string;

  constructor(
    private memberService: MemberService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  get f() {
    return this.form.controls;
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    const email = this.f['email'].value;

    this.error = '';
    this.submitted = true;

    if (email) {
      this.router.navigate(['/zh-TW/resetpassword']);
    }
  }
}
