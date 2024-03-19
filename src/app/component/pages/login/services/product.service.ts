import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order'; // Replace 'Order' with your order model

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = 'http://localhost:8080/travelweb/products/'; // Your API endpoint

  constructor(private http: HttpClient) { }

  getOrdersByMemberId(memberId: string): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiUrl}?memberId=${memberId}`);
  }
}
