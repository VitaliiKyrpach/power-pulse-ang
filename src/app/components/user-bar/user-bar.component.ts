import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

@Component({
  selector: 'app-user-bar',
  standalone: true,
  imports: [IconSpriteModule],
  templateUrl: './user-bar.component.html',
  styleUrl: './user-bar.component.scss'
})
export class UserBarComponent {
  
constructor(private router: Router){}

public goToProfile(): void{
  this.router.navigate(['/profile'])
}
public logout(): void{
  console.log('bye bye')
}
}
