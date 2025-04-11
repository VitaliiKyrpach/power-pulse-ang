import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { filter } from 'rxjs';
import { UserBarComponent } from '../user-bar/user-bar.component';
import { UserNavComponent } from '../user-nav/user-nav.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IconSpriteModule, CommonModule, UserBarComponent, UserNavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  @Input() place: string = '';
  @Input() notFound: boolean = false;
  constructor(private router: Router) {}
  ngOnInit(): void {
    console.log(this.place);
    // this.router.events
    //   .pipe(filter((event) => event instanceof NavigationEnd))
    //   .subscribe((event) => console.log(event.url.replace('/', '')));
  }
  public redirectToHome(): void {
    this.router.navigate(['/']);
  }
}
