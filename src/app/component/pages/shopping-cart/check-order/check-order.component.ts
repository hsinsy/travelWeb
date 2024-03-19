//import { Component } from '@angular/core';
import { IntervalBlockComponent } from '../../../shared/interval-block/interval-block.component';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Component, OnInit, inject } from '@angular/core';
import { CartService } from '@component/shared/cart/cart.service';
import { CommonModule } from '@angular/common';
import { Order } from '@api/order-api/orderType';
import { ShoppingCartType } from '@api/product-api/productType';
import { OrderService } from '@api/order-api/order.service';

@Component({
  selector: 'app-check-order',
  standalone: true,
  templateUrl: './check-order.component.html',
  styleUrl: './check-order.component.scss',
  imports: [
    IntervalBlockComponent,
    RouterLink,
    RouterLinkActive,
    LocalizeRouterModule,
    CommonModule,
  ],
})
export class CheckOrderComponent implements OnInit {
  constructor(private orderService: OrderService) {}
  path = '/payok';
  cartService = inject(CartService);
  cart = this.cartService.cart;
  totalPrice = 0;
  orederList: Order[] = [];

  ngOnInit(): void {
    console.log('page 2:');
    console.log(this.cart);
    this.getTotalPrice();
    this.cartLoop();
  }

  getTotalPrice() {
    for (const item of this.cart) {
      this.totalPrice += item.productTotalPrice;
    }
    console.log('totalPrice: ');
    console.log(this.totalPrice);
  }

  cartLoop() {
    this.cart.forEach((cartItem) => {
      this.orederList.push(this.cartConvertToOrder(cartItem));
    });
  }

  cartConvertToOrder(cartItem: ShoppingCartType): Order {
    return {
      ...cartItem,
      memberId: '2',
    };
  }

  executeAddOrder() {
    this.orederList.forEach((orderItem) => {
      this.onAddOrder(orderItem);
    });
  }

  onAddOrder(order: Order) {
    this.orderService
      .addOrder(order)
      .subscribe((result) => console.log(result));
  }
}
