import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';


import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { SearchmovieService } from './site/films/services/searchmovie.service';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),
    provideHttpClient(), // Fournit HttpClient
    SearchmovieService, // Fournit le service SearchmovieService
  ]
};