import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [FormsModule, IconSpriteModule, SelectModule ],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.scss',
})
export class ProductsPageComponent {
  public dataExist: boolean = false;
  public search: string = '';
  public category: string = '';
  public recommend: string = 'All'
  public clearSearch(): void {
    this.search = '';
  }
  public goSearch(): void {
    console.log(this.search);
  }
  public categories = [
    'drinks', 'meat','drinks', 'meat','drinks', 'meat','drinks', 'meat','drinks', 'meat','drinks', 'meat',
  ]
  public recommendArr =['All','Recommended', 'Not recommended']
}
