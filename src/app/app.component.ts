import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { HeaderComponent } from './components/header/header.component';
import { filter } from 'rxjs';
import { StatisticComponent } from './components/statistic/statistic.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IconSpriteModule, HeaderComponent, StatisticComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'power-pulse-ang';
  public place: string = '';

  constructor(private router: Router){}

  ngOnInit(): void {
    this.router.events.pipe(filter(event=> event instanceof NavigationEnd)).subscribe(event=>{
      this.place = event.url.replace('/', '')
    })
  }
}
