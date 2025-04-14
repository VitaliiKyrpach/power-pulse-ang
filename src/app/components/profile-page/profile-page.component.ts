import { Component } from '@angular/core';
import { UserFormComponent } from '../user-form/user-form.component';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [UserFormComponent, UserCardComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss'
})
export class ProfilePageComponent {

}
