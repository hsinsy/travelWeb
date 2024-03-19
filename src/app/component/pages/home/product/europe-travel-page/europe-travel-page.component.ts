import { Component } from '@angular/core';
import { ProductTopBlockComponent } from '../shared/product-top-block/product-top-block.component';
import { SpecialNoteComponent } from '../shared/special-note/special-note.component';
import { IntervalBlockComponent } from '../../../../shared/interval-block/interval-block.component';
import { ProductTitleComponent } from '../shared/product-title/product-title.component';
import { TravelSpotBlockComponent } from '../shared/travel-spot-block/travel-spot-block.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-europe-travel-page',
  standalone: true,
  templateUrl: './europe-travel-page.component.html',
  styleUrl: './europe-travel-page.component.scss',
  imports: [
    ProductTopBlockComponent,
    SpecialNoteComponent,
    IntervalBlockComponent,
    ProductTitleComponent,
    TravelSpotBlockComponent,
    TranslateModule,
  ],
})
export class EuropeTravelPageComponent {
  travelLocation = 'europe';
  titileList = ['HighLights', 'Sights', 'Accommodation', 'Food'];

  highLightsContent = 'EUTOURCONTENT';

  sightsTitle1 = 'EUSIGHTSTITLE1A';
  sightsContent1 = 'EUSIGHTSCONTENTA';

  sightsTitle2 = 'EUSIGHTSTITLE1B';

  sightsContent3 = 'EUSIGHTSCONTENT1C';

  accommodationContent = 'EUROOMTYPEINFO1';

  foodContent1 = 'EUFOODTITLE1A';

  foodTitle2 = 'EUFOODSUBTITLE1A';
  foodContent2 = 'EUFOODCONTENT1A';

  foodContent3 = 'EUFOODCONTENT1B';

  dubaiContent1 = 'EUTOURPROMO1';

  dubaiTitle2 = 'EUFOODSUBTITLE1B';
  dubaiContent2 = 'EUFOODCONTENT1C';

  dubaiTitle3 = 'EUSIGHTSTITLE2A';
  dubaiContent3 = 'EUSIGHTSCONTENT3A';

  highLightsImgUrl1 = 'assets/image/europeTravelPage/HighLightImg01.png';

  sightsTitleImgUrl1 = 'assets/image/europeTravelPage/SightsTitleImg01.png';
  sightsTitleImgUrl2 = 'assets/image/europeTravelPage/SightsTitleImg02.png';
  sightsImgUrl1 = 'assets/image/europeTravelPage/SightsImg01.png';
  sightsImgUrl2 = 'assets/image/europeTravelPage/SightsImg02.png';
  sightsImgUrl3 = 'assets/image/europeTravelPage/SightsImg03.png';
  sightsImgUrl4 = 'assets/image/europeTravelPage/SightsImg04.png';
  sightsImgUrl5 = 'assets/image/europeTravelPage/SightsImg05.png';
  sightsImgUrl6 = 'assets/image/europeTravelPage/SightsImg06.png';

  foodImgUrl0 = 'assets/image/europeTravelPage/FoodImg00.png';
  foodImgUrl1 = 'assets/image/europeTravelPage/FoodImg01.png';
  foodImgUrl2 = 'assets/image/europeTravelPage/FoodImg02.png';
  foodImgUrl3 = 'assets/image/europeTravelPage/FoodImg03.png';
  foodImgUrl4 = 'assets/image/europeTravelPage/FoodImg04.png';

  travelBannerImgUrl02 = 'assets/image/europeTravelPage/TravelBannerImg02.png';
  dubaiImgUrl1 = 'assets/image/europeTravelPage/DubaiImg01.png';
  dubaiImgUrl2 = 'assets/image/europeTravelPage/DubaiImg02.png';
  dubaiImgUrl3 = 'assets/image/europeTravelPage/DubaiImg03.png';
  dubaiImgUrl4 = 'assets/image/europeTravelPage/DubaiImg04.png';
}
