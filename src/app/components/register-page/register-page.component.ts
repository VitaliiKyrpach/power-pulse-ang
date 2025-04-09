import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RegErrors, RegForm } from '../../interfaces/interfaces';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, IconSpriteModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
})
export class RegisterPageComponent {
  public regForm: FormGroup<RegForm> = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
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

  public errors: RegErrors = {
    name: '',
    email: '',
    password: '',
  };

  public get name(): FormControl {
    return this.regForm.controls.name as FormControl;
  }
  public get email(): FormControl {
    return this.regForm.controls.email as FormControl;
  }
  public get password(): FormControl {
    return this.regForm.controls.password as FormControl;
  }

  public updErrors(type: string) {
    switch (type) {
      case 'name':
        if (this.name.hasError('required')) {
          this.errors.name = 'field is required';
        } else {
          this.errors.name = '';
        }

        break;
      case 'email':
        if (this.email.hasError('pattern')) {
          this.errors.email = 'invalid email';
        } else if (this.email.hasError('required')) {
          this.errors.email = 'field is required';
        } else {
          this.errors.email = '';
        }
        break;
      case 'password':
        if (this.password.hasError('minlength')) {
          this.errors.password = 'password must contain at least 6 symbols';
        } else if (this.password.hasError('required')) {
          this.errors.password = 'field is required';
        } else {
          this.errors.password = '';
        }
        break;
    }
  }
  public formSubmit(): void {
    console.log(this.regForm.value);
    console.log(this.regForm.valid, this.regForm.dirty);
    this.regForm.reset();
  }
}
