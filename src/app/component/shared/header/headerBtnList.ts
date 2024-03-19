import { headerBtnItem } from './headerBtnType';

export const headerBtnList: headerBtnItem[] = [
  {
    btnText: 'ABOUTUS',
    path: '/about',
    isWarn: false,
    isFlatBtn: true,
  },
  {
    btnText: 'TRAVEL',
    path: '/travelList',
    isWarn: false,
    isFlatBtn: true,
  },
  {
    btnText: 'MEMBER',
    path: '/profiles/:memberId',
    isWarn: false,
    isFlatBtn: true,
  },
  {
    btnText: 'LOGIN',
    path: '/login',
    isWarn: true,
    isFlatBtn: true,
  },
  {
    btnText: 'translate',
    isWarn: false,
    isMenu: true,
  },
  {
    btnText: 'shopping_cart',
    path: '/shoppingCart',
    isWarn: false,
  },
];
