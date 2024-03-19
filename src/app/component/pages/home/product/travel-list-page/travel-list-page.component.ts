import { Component, OnInit } from '@angular/core';
import { IntervalBlockComponent } from '../../../../shared/interval-block/interval-block.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { TranslateModule } from '@ngx-translate/core';
import { TravelListItemComponent } from '../shared/travel-list-item/travel-list-item.component';
// import fakeJson from '@assets/travelList/fake.json';
// import { travelListItemType } from '../shared/travel-list-item/travel-list-item-type';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ProductService } from '@api/product-api/product.service';
import { Product } from '@api/product-api/productType';

@Component({
  selector: 'app-travel-list-page',
  standalone: true,
  templateUrl: './travel-list-page.component.html',
  styleUrl: './travel-list-page.component.scss',
  imports: [
    IntervalBlockComponent,
    RouterLink,
    RouterLinkActive,
    LocalizeRouterModule,
    TranslateModule,
    TravelListItemComponent,
    CommonModule,
    MatDividerModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
  ],
})
export class TravelListPageComponent implements OnInit {
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  path = '/about';
  dataArray: Product[] = [];

  locationCheckBoxList: locationCheckBoxListType = {
    title: 'TRAVEL',
    subCheckBox: [
      { location: 'japen', isChecked: false },
      { location: 'korea', isChecked: false },
      { location: 'europe', isChecked: false },
    ],
  };

  checkBoxCurrentState() {
    this.locationCheckBoxList.subCheckBox.forEach((i) =>
      console.log(i.location + ' ' + i.isChecked)
    );
  }

  dataArrayFilter() {
    this.dataArray = [];
    console.log('clear dataArray');

    this.locationCheckBoxList.subCheckBox.forEach((item) => {
      if (item.isChecked) {
        this.productService
          .getProductsByArea(item.location)
          .subscribe((product: Product[]) => {
            this.dataArray = this.dataArray.concat(product);
          });
      }
    });
  }

  getAllProducts() {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.dataArray = products;
    });
  }
}

type locationCheckBoxListType = {
  title: string;
  subCheckBox: location[];
};

type location = {
  location: string;
  isChecked: boolean;
};
