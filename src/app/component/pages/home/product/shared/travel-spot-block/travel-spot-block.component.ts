import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-travel-spot-block',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './travel-spot-block.component.html',
})
export class TravelSpotBlockComponent {
  @Input()
  blockType!: number;
  @Input() isNeedSpace = false;
  @Input() title = '';
  @Input() content = '';
  @Input() imgUrl1 = '';
  @Input() imgUrl2 = '';
}
