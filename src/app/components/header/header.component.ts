import { Component } from '@angular/core';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IconSpriteModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
