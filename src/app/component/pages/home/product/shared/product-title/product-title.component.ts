import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-title',
  standalone: true,
  imports: [],
  templateUrl: './product-title.component.html',
})
export class ProductTitleComponent {
  @Input() titleText: string = '';
  yellowRoundUrl = 'assets/image/YellowRoundImg.png';
}
