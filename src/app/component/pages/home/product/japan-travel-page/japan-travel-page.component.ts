import { Component } from '@angular/core';
import { IntervalBlockComponent } from '../../../../shared/interval-block/interval-block.component';
import { MatButtonModule } from '@angular/material/button';
import { ProductTopBlockComponent } from '../shared/product-top-block/product-top-block.component';
import { ProductTitleComponent } from '../shared/product-title/product-title.component';
import { SpecialNoteComponent } from '../shared/special-note/special-note.component';
import { TravelSpotBlockComponent } from '../shared/travel-spot-block/travel-spot-block.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-japan-travel-page',
  standalone: true,
  templateUrl: './japan-travel-page.component.html',
  styleUrl: './japan-travel-page.component.scss',
  imports: [
    IntervalBlockComponent,
    MatButtonModule,
    ProductTopBlockComponent,
    ProductTitleComponent,
    SpecialNoteComponent,
    TravelSpotBlockComponent,
    TranslateModule,
  ],
})
export class JapanTravelPageComponent {
  travelLocation = 'japen';
  titileList = ['HighLights', 'Sights', 'Experience'];
  highLightsTitle1 = 'JPTOURSUBTITLEA';
  highLightsTitle3 = 'JapenLocation02';
  highLightsContent1 = 'JPTOURCONTENTA';
  highLightsContent2 = 'JBTOURCONTENTB';
  highLightsContent3 = 'JBTOURCONTENT1C';

  sightsTitle1 = 'SIGHTSTITLE1A';
  sightsContent1 = 'SIGHTSCONTENT1A';

  experienceTitle1 = 'EXPERIENCESUBTITLE';
  experienceContent1 = 'EXPERIENCECONTENT';

  highLightsImgUrl1 = 'assets/image/japenTravelPage/HighLightImg01.png';
  highLightsImgUrl2 = 'assets/image/japenTravelPage/HighLightImg02.png';
  highLightsImgUrl3 = 'assets/image/japenTravelPage/HighLightImg03.png';
  highLightsImgUrl4 = 'assets/image/japenTravelPage/HighLightImg04.png';

  sightsImagUrl1 = 'assets/image/japenTravelPage/SightsImg01.png';
  sightsImagUrl2 = 'assets/image/japenTravelPage/SightsImg02.png';
  sightsImagUrl3 = 'assets/image/japenTravelPage/SightsImg03.png';
  sightsImagUrl4 = 'assets/image/japenTravelPage/SightsImg04.png';
  sightsImagUrl5 = 'assets/image/japenTravelPage/SightsImg05.png';

  experienceImgUrl1 = 'assets/image/japenTravelPage/ExperienceImg01.png';
  experienceImgUrl2 = 'assets/image/japenTravelPage/ExperienceImg02.png';
  experienceImgUrl3 = 'assets/image/japenTravelPage/ExperienceImg03.png';
  experienceImgUrl4 = 'assets/image/japenTravelPage/ExperienceImg04.png';
  experienceImgUrl5 = 'assets/image/japenTravelPage/ExperienceImg05.png';

  specialNoteImgUrl = 'assets/image/specialNoteImg.png';
}
