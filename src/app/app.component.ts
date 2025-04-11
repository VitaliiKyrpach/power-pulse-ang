import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { HeaderComponent } from './components/header/header.component';
import { filter } from 'rxjs';
import { StatisticComponent } from './components/statistic/statistic.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    IconSpriteModule,
    HeaderComponent,
    StatisticComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'power-pulse-ang';
  public place: string = '';
  public isNotFound: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        const currentRoute = this.getDeepestChild(this.route);
        const component = currentRoute.snapshot.component;

        this.place = event.url.replace('/', '');
        this.isNotFound = component === NotFoundComponent;
      });
  }

  private getDeepestChild(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }
}
