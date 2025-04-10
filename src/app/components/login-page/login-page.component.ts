import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LogErrors, LoginForm } from '../../interfaces/interfaces';
import { RouterLink } from '@angular/router';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, IconSpriteModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  public loginForm: FormGroup<LoginForm> = new FormGroup({
    email: new FormControl('', {
      validators: [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/),
      ],
      nonNullable: true,
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)],
      nonNullable: true,
    }),
  });

  public errors: LogErrors = {
    email: '',
    password: '',
  };

  public get email(): FormControl {
    return this.loginForm.controls.email as FormControl;
  }
  public get password(): FormControl {
    return this.loginForm.controls.password as FormControl;
  }

  public updErrors(type: string): void {
    switch (type) {
      case 'email':
        if (this.email.hasError('required')) {
          this.errors.email = 'field is required';
        } else if (this.email.hasError('pattern')) {
          this.errors.email = 'invalid email';
        } else {
          this.errors.email = '';
        }
        break;
      case 'password':
        if (this.password.hasError('required')) {
          this.errors.password = 'field is required';
        } else if (this.password.hasError('minlength')) {
          this.errors.password = 'password must contain at least 6 symbols';
        } else {
          this.errors.password = '';
        }
    }
  }
  public onSubmit(): void {
    console.log(this.loginForm.value);
    this.loginForm.reset();
  }
}
