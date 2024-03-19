import { Component, Input, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Product } from '@api/product-api/productType';
import { CartService } from '@component/shared/cart/cart.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-travel-list-item',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    LocalizeRouterModule,
    TranslateModule,
    TravelListItemComponent,
    CommonModule,
    MatButtonModule,
  ],
  templateUrl: './travel-list-item.component.html',
  styleUrl: './travel-list-item.component.scss',
})
export class TravelListItemComponent {
  constructor(
    private cookieService: CookieService,
    private router: Router
  ) {}

  @Input()
  product!: Product;
  cartService = inject(CartService);
  cart = this.cartService.cart;

  onAddToCart(product: Product) {
    if (this.cookieService.get('memberId')) {
      this.cartService.addProductToCart(product);
    } else {
      this.router.navigate(['/zh-TW/login']);
    }
  }
}
