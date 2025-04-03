import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IconSpriteModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'power-pulse-ang';
}
