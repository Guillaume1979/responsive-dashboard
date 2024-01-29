import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {LayoutModule} from "@angular/cdk/layout";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  importProvidersFrom(LayoutModule)
  ]
};
