import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [FormsModule, IconSpriteModule],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.scss',
})
export class ProductsPageComponent {
  public dataExist: boolean = false;
  public search: string = '';
  public clearSearch(): void {
    this.search = '';
  }
  public goSearch(): void {
    console.log(this.search);
  }
}
