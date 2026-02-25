import {ApplicationConfig, provideBrowserGlobalErrorListeners} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {APP_CONFIG} from './core/config/app-config.token';
import {appConfigProd} from './core/config/app-config.prod';
import {appConfigDev} from './core/config/app-config.dev';

const isProduction = window.location.hostname !== 'localhost';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: APP_CONFIG,
      useValue: isProduction ? appConfigProd : appConfigDev,
    }
  ]
};
