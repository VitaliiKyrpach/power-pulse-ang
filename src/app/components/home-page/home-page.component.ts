import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [IconSpriteModule, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
