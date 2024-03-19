import { Component, VERSION, inject, Input } from '@angular/core';
import { IntervalBlockComponent } from '../../shared/interval-block/interval-block.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';

import { ShoppingCartType } from '@api/product-api/productType';
import { CartService } from '@component/shared/cart/cart.service';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
  imports: [
    IntervalBlockComponent,
    RouterLink,
    RouterLinkActive,
    LocalizeRouterModule,
    CommonModule,
    MatDividerModule,
  ],
})
export class ShoppingCartComponent {
  path = '/checkOrder';
  cartService = inject(CartService);
  cart = this.cartService.cart;
  @Input()
  totalAmount!: number;

  data: ShoppingCartType[] = [
    {
      productImgUrl: 'assets/image/japenTravelPage/TravelMainImg.png ',
      productCode: '24JY324BRM-T',
      productName: '1234',
      productArea: 'TinaZone',
      startDate: '2024/03/24 (日)',
      endDate: '2024/03/24 (日)',
      travelDays: '1',
      productPriceAdult: '9999',
      productPriceChild: '8888',
      productAmountAdult: 0, // Initialize adult quantity
      productAmountChild: 0, // Initialize children quantity
      productTotalPrice: 0,
    },
    {
      productImgUrl: 'assets/image/japenTravelPage/TravelMainImg.png ',
      productCode: '24JY324BRM-K',
      productName: '1234',
      productArea: 'ooo',
      startDate: '9999/03/24 (日)',
      endDate: '9999/03/24 (日)',
      travelDays: '1',
      productPriceAdult: '9999',
      productPriceChild: '8888',
      productAmountAdult: 0, // Initialize adult quantity
      productAmountChild: 0, // Initialize children quantity
      productTotalPrice: 0,
    },
  ];

  //下一頁
  checkboxChecked: boolean = false;
  //CartService: any;
  checkboxChanged(event: Event) {
    this.checkboxChecked = (event.target as HTMLInputElement).checked;
  }

  name = 'Angular ' + VERSION.major;

  value: number = 0;
  value2 = 0;

  handleMinus(cart: ShoppingCartType, type: string) {
    if (type === 'adult' && cart.productAmountAdult > 0) {
      cart.productAmountAdult--;
    } else if (type === 'children' && cart.productAmountChild > 0) {
      cart.productAmountChild--;
    }
  }

  handlePlus(cart: ShoppingCartType, type: string) {
    if (type === 'adult') {
      cart.productAmountAdult++;
    } else if (type === 'children') {
      cart.productAmountChild++;
    }
  }

  childrenMinus(cart: ShoppingCartType, type: string) {
    if (type === 'adult' && cart.productAmountAdult > 0) {
      cart.productAmountAdult--;
    } else if (type === 'children' && cart.productAmountChild > 0) {
      cart.productAmountChild--;
    }
  }

  childrenPlus(cart: ShoppingCartType, type: string) {
    if (type === 'adult') {
      cart.productAmountAdult++;
    } else if (type === 'children') {
      cart.productAmountChild++;
    }
  }

  countSum(ticketPrice: string, number: number): number {
    return Number(ticketPrice) * number;
  }

  calculateTotal(): number {
    let total = 0;
    let adultTotal = 0;
    let childTotal = 0;
    this.cart.forEach((cartItem) => {
      adultTotal = this.countSum(
        cartItem.productPriceAdult,
        cartItem.productAmountAdult
      );
      childTotal = this.countSum(
        cartItem.productPriceChild,
        cartItem.productAmountChild
      );
      total += adultTotal + childTotal;
      cartItem.productTotalPrice = adultTotal + childTotal;
    });
    return total;
  }
  setCartTicketInfo() {
    console.log(this.cart);
    this.cartService.replaceShoppingCart(this.cart);
  }

  clearCart() {
    // Loop through each item in the cart and set quantities to zero
    for (const cart of this.cart) {
      cart.productAmountAdult = 0;
      cart.productAmountChild = 0;
    }
  }

  removeItem() {
    this.cart = [];
    // this.cartService.clearCart();
  }

  // removeItem() {
  //   this.cartService.clearCart();
  // }
}
