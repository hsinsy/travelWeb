import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './productType';
import { Observable, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl = 'http://localhost:8080/travelweb/products';
  localOrders: string[] = [];
  errmsg: any;

  constructor(private http: HttpClient) {}

  //get all products (test ok)
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(
      // tap(console.log),
      catchError((err) => {
        throw 'error in getProducts' + err;
      })
    );
  }

  //get products by area（test OK => DB寫法似乎有誤，待改正 => 我改好了)
  getProductsByArea(area: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + '/' + area).pipe(
      tap(console.log),
      catchError((err) => {
        throw 'error in getProductsByArea' + err;
      })
    );
  }

  //get a product by ID (don't have this function)
  // getProductByID(productID: string): Observable<Product> {
  //   return this.http.get<Product>(this.baseUrl + '/' + productID).pipe(
  //     tap(console.log),
  //     catchError((err) => {
  //       throw 'error in getProduct' + err;
  //     })
  //   );
  // }

  //add a product to DB (TODO)
  addProduct(product: Product): Observable<Product> {
    return this.http.post<string>(this.baseUrl + '/add', product).pipe(
      tap(console.log),
      catchError((err) => {
        throw 'error in addProduct' + err;
      })
    );
  }

  //update product (don't have this function)
  // updateProduct(product: Product): Observable<Product> {
  //   return this.http.put<string>(this.baseUrl + '/update', product).pipe(
  //     tap(console.log),
  //     catchError((err) => {
  //       throw 'error in updateProduct' + err;
  //     })
  //   );
  // }

  //delete prodcut by product ID (TODO)
  deleteProduct(productID: string): Observable<Product> {
    return this.http.delete<any>(this.baseUrl + '/' + productID).pipe(
      tap(console.log),
      catchError((err) => {
        throw 'error in deleteProduct' + err;
      })
    );
  }
}
