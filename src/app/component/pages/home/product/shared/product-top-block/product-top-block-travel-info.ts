export type productTopBlockType = {
  title: string;
  mainImgurl: string;
  travelInfo: {
    productCode: string;
    startDate: string;
    endDate: string;
    travelDays: number;
    adultTicketPrice: number;
    childrenTicketPrice: number;
  };
  bannerImgurl: string;
};

export type travelLocationType = {
  japen: productTopBlockType;
  korea: productTopBlockType;
  europe: productTopBlockType;
};

export const productTopBlockContent: travelLocationType = {
  japen: {
    title: 'JPTOURTITLE',
    mainImgurl: 'assets/image/japenTravelPage/TravelMainImg.png',
    travelInfo: {
      productCode: '24JY324BRM-T',
      startDate: '2024/03/24 (日)',
      endDate: '2024/03/28 (四) ',
      travelDays: 5,
      adultTicketPrice: 51900,
      childrenTicketPrice: 49900,
    },
    bannerImgurl: 'assets/image/japenTravelPage/TravelBannerImg.png',
  },
  korea: {
    title: 'KRTOURTITLE',
    mainImgurl: 'assets/image/koreaTravelPage/TravelMainImg.png',
    travelInfo: {
      productCode: '24JK3277CG-T',
      startDate: '2024/03/27 (三)',
      endDate: '2024/03/30 (六) ',
      travelDays: 4,
      adultTicketPrice: 25900,
      childrenTicketPrice: 24900,
    },
    bannerImgurl: 'assets/image/koreaTravelPage/TravelBannerImg.png',
  },
  europe: {
    title: 'EUTOURTITLE',
    mainImgurl: 'assets/image/europeTravelPage/TravelMainImg.png',
    travelInfo: {
      productCode: '24EI404EK-T',
      startDate: '2024/04/04 (四)',
      endDate: '2024/04/15 (一) ',
      travelDays: 12,
      adultTicketPrice: 169900,
      childrenTicketPrice: 167900,
    },
    bannerImgurl: 'assets/image/europeTravelPage/TravelBannerImg.png',
  },
};
