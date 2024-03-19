import {
  APP_INITIALIZER,
  ApplicationConfig,
  importProvidersFrom,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { Location } from '@angular/common';
import { translateLoaderFactory } from './core/translate-loader-factory';
import {
  LocalizeParser,
  LocalizeRouterModule,
  LocalizeRouterSettings,
} from '@gilsdav/ngx-translate-router';
import { localizeLoaderFactory } from './core/localize-loader-factory';
import { initializeDirectionFactory } from './core/initialize-direction.factory';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'zh-TW',
        loader: {
          provide: TranslateLoader,
          useFactory: translateLoaderFactory,
          deps: [HttpClient],
        },
      }),
      LocalizeRouterModule.forRoot(routes, {
        parser: {
          provide: LocalizeParser,
          useFactory: localizeLoaderFactory,
          deps: [
            TranslateService,
            Location,
            LocalizeRouterSettings,
            HttpClient,
          ],
        },
        initialNavigation: true,
      })
    ),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeDirectionFactory,
      multi: true,
    },
    provideAnimationsAsync(),
    provideAnimationsAsync(),
  ],
};
