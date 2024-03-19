import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { OrderService } from '@api/order-api/order.service';
import { Order } from '@api/order-api/orderType';

@Component({
  selector: 'app-admin-order',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
  ],
  templateUrl: './admin-order.component.html',
})
export class AdminOrderComponent {
  constructor(private orderService: OrderService) {}

  inputIDValue: string = '';
  dataSource: Order[] = [];
  displayedColumns: string[] = [
    'orderId',
    'memberId',
    'productCode',
    'productName',
    'startDate',
    'endDate',
    'productAmountAdult',
    'productAmountChild',
    'productTotalPrice',
    // 'delete',
  ];

  onSearchByID() {
    this.orderService
      .getOrdersByMemberID(this.inputIDValue)
      .subscribe((orders: Order[]) => {
        // console.log(orders);
        this.dataSource = orders;
      });
  }

  onSearchAll() {
    this.orderService.getOrders().subscribe((orders: Order[]) => {
      // console.log(orders);
      this.dataSource = orders;
    });
  }

  fakeOrders: Order[] = [
    {
      // orderId: '';
      memberId: '2',
      productCode: '24JY324BRM-J',
      productName: '北海道吃帝王蟹',
      startDate: '2024/03/24 (日)',
      endDate: '2024/03/28 (四)',
      productAmountAdult: 2,
      productAmountChild: 2,
      productTotalPrice: 203600,
    },
    {
      // orderId: '';
      memberId: '2',
      productCode: '24JY324BRM-J-2',
      productName: '靜岡喝抹茶',
      startDate: '2024/04/24 (日)',
      endDate: '2024/04/28 (四)',
      productAmountAdult: 2,
      productAmountChild: 2,
      productTotalPrice: 203600,
    },
    {
      // orderId: '';
      memberId: '2',
      productCode: '24JY324BRM-J-3',
      productName: '京都看古蹟',
      startDate: '2024/05/24 (日)',
      endDate: '2024/05/28 (四)',
      productAmountAdult: 1,
      productAmountChild: 1,
      productTotalPrice: 101800,
    },
  ];

  fakeOrder = {
    // orderId: '4',
    memberId: '2',
    productCode: '24JY324BRM-J-99',
    productName: '大阪吃大阪燒',
    startDate: '2024/03/24 (日)',
    endDate: '2024/03/28 (四)',
    productAmountAdult: 2,
    productAmountChild: 2,
    productTotalPrice: 203600,
  };

  onAddOrder(order: Order) {
    this.orderService
      .addOrder(order)
      .subscribe((result) => console.log(result));
  }

  onAddOrders(orders: Order[]) {
    this.orderService
      .addOrders(orders)
      .subscribe((result) => console.log(result));
  }

  // onDeleteOrder(orderId: string) {
  //   console.log(orderId);
  // }

  onInput(box: string) {
    console.log(box);
    this.inputIDValue = box;
  }
}
