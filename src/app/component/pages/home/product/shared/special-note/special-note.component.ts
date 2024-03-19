import { Component, Input, OnInit } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { noteContnet, noteContnetType } from './special-note-content';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-special-note',
  standalone: true,
  imports: [MatDividerModule, TranslateModule],
  templateUrl: './special-note.component.html',
})
export class SpecialNoteComponent implements OnInit {
  specialNoteImgUrl = 'assets/image/specialNoteImg.png';
  @Input() travelLocation: string = '';

  noteContnet: noteContnetType = noteContnet.japen;

  ngOnInit(): void {
    switch (this.travelLocation) {
      case 'japen':
        this.noteContnet = noteContnet.japen;
        break;
      case 'korea':
        this.noteContnet = noteContnet.korea;
        break;
      case 'europe':
        this.noteContnet = noteContnet.europe;
        break;

      default:
        console.log('no matched travel location');
        break;
    }
  }
}
