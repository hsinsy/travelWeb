import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductTopBlockComponent } from '../shared/product-top-block/product-top-block.component';
import { SpecialNoteComponent } from '../shared/special-note/special-note.component';
import { IntervalBlockComponent } from '../../../../shared/interval-block/interval-block.component';
import { ProductTitleComponent } from '../shared/product-title/product-title.component';
import { TravelSpotBlockComponent } from '../shared/travel-spot-block/travel-spot-block.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-korea-travel-page',
  standalone: true,
  templateUrl: './korea-travel-page.component.html',
  styleUrl: './korea-travel-page.component.scss',
  imports: [
    ProductTopBlockComponent,
    SpecialNoteComponent,
    IntervalBlockComponent,
    ProductTitleComponent,
    TravelSpotBlockComponent,
    CommonModule,
    TranslateModule,
  ],
})
export class KoreaTravelPageComponent {
  travelLocation = 'korea';
  titileList = ['HighLights', 'Sights', 'Accommodation', 'Shopping', 'Food'];

  highLightsTitle1 = 'KoreaLocation01';
  highLightsContent1 = 'KRTOURCONTENT';

  highLightsTitle2 = 'KoreaLocation02';
  highLightsContent2 = 'KRTOURCONTENTB';

  highLightsTitle3 = 'KRTOURSUBTITLEC';
  highLightsContent3 = 'KRTOURCONTENTC';

  sightsTitleList = [
    {
      url: 'assets/image/koreaTravelPage/SightsImg01.png',
      title: 'KRSIGHTSTITLEA',
    },
    {
      url: 'assets/image/koreaTravelPage/SightsImg02.png',
      title: 'KRSIGHTSTITLEB',
    },
    {
      url: 'assets/image/koreaTravelPage/SightsImg03.png',
      title: 'KRSIGHTSTITLEC',
    },
    {
      url: 'assets/image/koreaTravelPage/SightsImg04.png',
      title: 'KRSIGHTSTITLED',
    },
  ];

  accommodationContent = 'STAYINGINFO';

  shoppingTitle1 = 'SITEA1';
  shoppingContent1 = 'SITEDESCRIPTION1A';

  shoppingTitle2 = 'SITEB1';
  shoppingContent2 = 'SITEDESCRIPTION1B';

  shoppingTitle3 = 'SITEC';
  shoppingContent3 = 'SITEDESCRIPTION1C';

  shoppingContent4 = 'SITETITLE';

  foodContent1 = 'FOODDESCRIPTION';

  highLightsImgUrl1 = 'assets/image/koreaTravelPage/HighLightImg01.png';
  highLightsImgUrl2 = 'assets/image/koreaTravelPage/HighLightImg02.png';
  highLightsImgUrl3 = 'assets/image/koreaTravelPage/HighLightImg03.png';

  sightsImgUrl1 = 'assets/image/koreaTravelPage/SightsImg01.png';
  sightsImgUrl2 = 'assets/image/koreaTravelPage/SightsImg02.png';
  sightsImgUrl3 = 'assets/image/koreaTravelPage/SightsImg03.png';
  sightsImgUrl4 = 'assets/image/koreaTravelPage/SightsImg04.png';

  shoppingImgUrl1 = 'assets/image/koreaTravelPage/ShoppingImg01.png';
  shoppingImgUrl2 = 'assets/image/koreaTravelPage/ShoppingImg02.png';
  shoppingImgUrl3 = 'assets/image/koreaTravelPage/ShoppingImg03.png';

  foodImgUrl1 = 'assets/image/koreaTravelPage/FoodImg01.png';
  foodImgUrl2 = 'assets/image/koreaTravelPage/FoodImg02.png';
  foodImgUrl3 = 'assets/image/koreaTravelPage/FoodImg03.png';
  foodImgUrl4 = 'assets/image/koreaTravelPage/FoodImg04.png';
}
