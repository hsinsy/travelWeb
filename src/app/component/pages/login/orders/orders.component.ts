import { Order } from '@api/order-api/orderType';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '@api/order-api/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];

  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const memberId = params['memberId'];
      this.orderService.getOrdersByMemberID(memberId).subscribe(
        (data: Order[]) => {
          this.orders = data;
          console.log(data);
          this.orders.push();
        },
        (error) => {
          console.error('Error fetching order details:', error);
        }
      );
    });
  }
}
