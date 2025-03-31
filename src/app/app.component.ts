import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IconSpriteModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'power-pulse-ang';
}
