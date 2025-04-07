import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IconSpriteModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
constructor(private router: Router){}
  ngOnInit(): void {
  this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(event=> console.log(event.url.replace('/', '')))
}
}
