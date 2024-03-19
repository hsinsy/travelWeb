interface serviceBaseType {
  name: string;
  location: string;
  phone: string;
  businessHours: string;
}

export const serviceBaseList: serviceBaseType[] = [
  {
    name: '台北中山',
    location: `10444台北市中山區南京西路6號2樓
  (近中山北路南京西路交叉口)
  *捷運淡水信義線 中山站2號出口`,
    phone: '(02)2562-2328',
    businessHours: `星期一~五 08:30 ~ 19:00
    星期六~日及國定假日 08:30 ~ 17:00`,
  },
  {
    name: '台中勤美',
    location: `40360台中市西區公益路68號B1
  (勤美誠品綠園道)`,
    phone: '(04)2328-8228',
    businessHours: `星期一~日及國定假日 08:30 ~ 17:00`,
  },
  {
    name: '高雄五福',
    location: `80025高雄市新興區五福二路262號2樓
  (大統百貨五福店)`,
    phone: '(07)216-7188',
    businessHours:
      '週一 ~ 週四 8:30 ~ 12:00 \n 13:00 ~ 17:00 \n週五 8:30 ~ 12:00 \n13:00 ~ 18:30 \n週六  08:30~17:30\n週日  08:30~17:00',
  },
];
