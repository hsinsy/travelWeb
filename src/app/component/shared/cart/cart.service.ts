import { Injectable } from '@angular/core';
import { Product, ShoppingCartType } from '@api/product-api/productType';
import { Order } from '@api/order-api/orderType';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: ShoppingCartType[] = [];

  addProductToCart(product: Product) {
    const data: ShoppingCartType = {
      ...product,
      productAmountAdult: 0,
      productAmountChild: 0,
      productTotalPrice: 0,
    };
    this.cart.push(data);
    console.log('product: ');
    console.log(product);
    console.log('data: ');
    console.log(data);
  }

  replaceShoppingCart(list: ShoppingCartType[]) {
    this.cart = list;
  }

  shoppingCartToOrder(data: ShoppingCartType): Order {
    return {
      ...data,
      memberId: '',
      productAmountAdult: 0,
      productAmountChild: 0,
      productTotalPrice: 0,
    };
  }

  clearCart() {
    this.cart = [];
  }
}
