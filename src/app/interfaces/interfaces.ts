import { FormControl } from '@angular/forms';

export interface RegForm {
  name: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
}
export interface RegErrors {
  name: string;
  email: string;
  password: string;
}
