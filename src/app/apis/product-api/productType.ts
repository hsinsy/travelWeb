export interface Product {
  productId?: string;
  productCode: string;
  productName: string;
  productArea: string;
  productImgUrl?: string;
  startDate: string;
  endDate: string;
  travelDays: string;
  productPriceAdult: string;
  productPriceChild: string;
}

export interface ShoppingCartType extends Product {
  productAmountAdult: number;
  productAmountChild: number;
  productTotalPrice: number;
}
