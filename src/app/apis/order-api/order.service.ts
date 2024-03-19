import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from './orderType';
import { Observable, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  baseUrl = 'http://localhost:8080/travelweb/orders';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  //get orders (test OK)
  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl).pipe(
      tap(console.log),
      catchError((err) => {
        throw 'error in getOrders' + err;
      })
    );
  }

  //get orders by member ID (test fail => DB 似乎寫法有誤，待更新 => 我改好了)
  getOrdersByMemberID(memberID: string): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl + '/' + memberID).pipe(
      tap(console.log),
      catchError((err) => {
        console.log('getOrdersByMemberID err: ');
        console.log(err);
        throw 'error in getOrdersByMemberID' + err;
      })
    );
  }

  //add orders to DB (test fail -> DB 尚未修改，目前是接收一筆，回傳order[])
  addOrders(orderList: Order[]): Observable<Order[]> {
    return this.http.post<string>(this.baseUrl + '/add', orderList).pipe(
      tap(console.log),
      catchError((err) => {
        throw 'error in addOrders' + err;
      })
    );
  }

  //add a order to DB (test OK -> DB 回傳order[]，待修改)
  addOrder(order: Order): Observable<Order> {
    return this.http.post<string>(this.baseUrl + '/add', order).pipe(
      tap(console.log),
      catchError((err) => {
        console.log(err);
        throw 'error in addOrders' + err;
      })
    );
  }
}
