import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LogoBtnComponent } from '../logo-btn/logo-btn.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  imports: [
    LogoBtnComponent,
    CommonModule,
    MatButtonModule,
    RouterLink,
    RouterLinkActive,
    LocalizeRouterModule,
    TranslateModule,
  ],
})
export class FooterComponent {
  bgcolor = '#e9d3ee';
  copyRight =
    'Copyright© OPTIMAL SEAL TRAVEL SERVICE CO., LTD. All Rights Reserved';

  footerTextList = [
    {
      title: 'SERVE',
      textList: [
        { text: 'ABOUTUS', path: '/about' },
        { text: 'TRAVEL', path: '/product/japanTravel' },
        { text: 'CONTACTUS' },
      ],
    },
    {
      title: 'INFORMATION',
      textList: [
        { text: 'ADDRESS' },
        { text: 'REPRESENTATIVE' },
        { text: 'Phone' },
        { text: 'Email: OptimalSealTravel@gmail.com' },
      ],
    },
  ];
}
