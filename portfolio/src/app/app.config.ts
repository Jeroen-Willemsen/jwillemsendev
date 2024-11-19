import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideHttpClient} from '@angular/common/http';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
import {provideHighlightOptions} from 'ngx-highlightjs';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideHttpClient(),
    provideHighlightOptions({
      fullLibraryLoader: () => import('highlight.js')
    })]
};
