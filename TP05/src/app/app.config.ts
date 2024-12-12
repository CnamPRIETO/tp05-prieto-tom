import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { provideHttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { routes } from './app.routes';
import { PanierState } from './shared/states/panier-state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    ApiService,
    importProvidersFrom(
      NgxsModule.forRoot([PanierState]),
      NgxsReduxDevtoolsPluginModule.forRoot()
    )
  ]
};
