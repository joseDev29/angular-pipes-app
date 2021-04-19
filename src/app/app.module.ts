import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { AppRouterModule } from './app-router.module';

import { SalesModule } from './sales/sales.module';
import { SharedModule } from './shared/shared.module';

import localeEs from '@angular/common/locales/es-CO';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEs);
registerLocaleData(localeFr);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    SalesModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-CO' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
