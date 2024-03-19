import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { ProductService } from '@api/product-api/product.service';
import { Product } from '@api/product-api/productType';

@Component({
  selector: 'app-admin-product',
  standalone: true,
  imports: [
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatDividerModule,
    MatSelectModule,
  ],
  templateUrl: './admin-product.component.html',
})
export class AdminProductComponent implements OnInit {
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.onSearchAll();
    // this.onSearchByArea();
  }

  areas = [
    { value: 'japen', viewValue: 'japen' },
    { value: 'korea', viewValue: 'korea' },
    { value: 'europe', viewValue: 'europe' },
  ];

  displayedColumns: string[] = [
    'productId',
    'productCode',
    'productName',
    'productArea',
    'startDate',
    'endDate',
    'travelDays',
    'productPriceAdult',
    'productPriceChild',
    // 'delete',
  ];

  dataSource: Product[] = [];
  areaValue!: string;

  onSearchByArea() {
    this.productService
      .getProductsByArea(this.areaValue)
      .subscribe((product: Product[]) => {
        this.dataSource = product;
      });

    console.log('areaValue: ' + this.areaValue);
  }

  onSearchAll() {
    this.productService.getProducts().subscribe((product: Product[]) => {
      this.dataSource = [];
      this.dataSource = product;
    });
  }

  fakeProductData = {
    // productId: '99',
    productCode: '24JY324BRM-T',
    productName: '1234',
    productArea: 'TinaZone',
    startDate: '2024/03/24 (日)',
    endDate: '2024/03/24 (日)',
    travelDays: '1',
    productPriceAdult: '9999',
    productPriceChild: '8888',
  };

  onAddProduct(product: Product) {
    this.productService
      .addProduct(product)
      .subscribe((result) => console.log(result));
  }

  // 刪除產品功能 (TODO)
  // onDeleteProduct(memberID: string) {
  //   this.productService
  //     .deleteProduct(memberID)
  //     .subscribe((result) => console.log(result));
  //   console.log('memberID: ' + memberID);
  //   // this.onSearchAll();
  // }
}
