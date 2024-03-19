export type shoppingCartType = {
  mainImgurl: string;
  area: string;
  title: string;
  adultQuantity: number; // Initialize adult quantity
  childrenQuantity: number; // Initialize children quantity
  travelInfo: [
    {
      productCode: string;
      startDate: string;
      endDate: string;
      travelDays: string;
      adultTicketPrice: string;
      childrenTicketPrice: string;
    },
  ];
};
