import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { recommandCardList } from './recommandCardList';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IntervalBlockComponent } from '../../shared/interval-block/interval-block.component';
// import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [
    MatCardModule,
    CommonModule,
    NgOptimizedImage,
    TranslateModule,
    IntervalBlockComponent,
  ],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    // this.autoPlay();
    console.log('build');
  }
  slideShowUrlList: string[] = [
    'assets/image/homePage/SideShow01.png',
    'assets/image/homePage/SideShow02.png',
    'assets/image/homePage/SideShow03.png',
  ];
  currentSlideShowNum: number = 0;
  recommandCardList = recommandCardList;

  autoPlay() {
    setTimeout(() => {
      this.changeSlideShow();
      this.autoPlay();
    }, 8000);
  }

  changeSlideShow() {
    if (this.currentSlideShowNum == this.slideShowUrlList.length - 1) {
      this.currentSlideShowNum = 0;
    } else {
      this.currentSlideShowNum++;
    }
  }
}
