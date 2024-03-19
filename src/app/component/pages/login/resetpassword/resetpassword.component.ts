import { MemberService } from '@api/member-api/member.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Member } from '@api/member-api/memberType';

@Component({
  selector: 'app-resetpassword',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink, MatButtonModule],
  templateUrl: './resetpassword.component.html',
  styleUrl: './resetpassword.component.scss',
})
export class ResetpasswordComponent implements OnInit {
  resetForm!: FormGroup;
  email: string = '';
  loading = false;
  submitted = false;
  error = '';
  member!: Member;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private memberService: MemberService
  ) {}

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      memberAccount: ['', [Validators.required]],
      memberPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.resetForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.resetForm.invalid) {
      console.log('Form is invalid');
      return;
    }

    this.loading = true;

    this.memberService
      .getMember(this.f['memberAccount'].value, '-1')
      .subscribe((member) => {
        const newMember: Member = {
          ...member,
          memberAccount: this.f['memberAccount'].value,
          memberPassword: this.f['memberPassword'].value,
        };

        this.memberService.updateMember(newMember).subscribe({
          next: (response) => {
            console.log(response);
            this.router.navigate([`/zh-TW/login`]);
          },
          error: (error) => {
            this.error = error;
            this.loading = false;
          },
        });
      });
  }
}
