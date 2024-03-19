import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
  FormControl,
} from '@angular/forms';
import { first } from 'rxjs/operators';
import { MemberService } from '@api/member-api/member.service';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmedValidator } from './components';
import { HttpErrorResponse } from '@angular/common/http';
import { IntervalBlockComponent } from '../../shared/interval-block/interval-block.component';
import { MatCommonModule } from '@angular/material/core';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  standalone: true,
  styleUrl: './register.component.scss',
  imports: [
    ReactiveFormsModule,
    NgClass,
    NgIf,
    RouterLink,
    RouterOutlet,
    MatButtonModule,
    MatSnackBarModule,
    IntervalBlockComponent,
    MatCommonModule,
  ],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private memberService: MemberService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group(
      {
        memberName: ['', Validators.required],
        memberAccount: ['', Validators.required],
        memberPhone: ['', Validators.required],
        memberEmail: new FormControl('', [
          Validators.required,
          Validators.email,
        ]),
        memberAddress: ['', Validators.required],
        memberPassword: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: ConfirmedValidator('memberPassword', 'confirmPassword'),
      }
    );
  }

  // convenience getter for easy access to form fields
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.loading = true;

    //if (this.form.invalid) {
    // console.log('Form is invalid');
    //return;
    //}

    this.memberService
      .addMember(this.form.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.openSuccessSnackBar('註冊成功');

          this.router.navigate([`/zh-TW/login`], {
            queryParams: { registered: true },
          });
        },
        error: (error: HttpErrorResponse) => {
          console.log('Error:', error);
          if (error.message.includes('error in addMember')) {
            this.openErrorSnackBar(
              '使用者帳號 "' + this.form.value.memberAccount + '" 已被使用'
            );
          } else {
            console.log('An error occurred: ' + error.message);
          }
          this.loading = false;
        },
      });
  }
  openSuccessSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 300, // Display duration in milliseconds
      verticalPosition: 'top', // Position the snackbar at the top of the screen
      panelClass: ['success-snackbar'], // Apply custom CSS class to style the snackbar for success
    });
  }

  openErrorSnackBar(errorMessage: string): void {
    this.snackBar.open(errorMessage, 'Close', {
      duration: 9000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['error-snackbar'],
    });
  }
}
