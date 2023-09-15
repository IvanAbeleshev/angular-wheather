import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonBackgroundComponent } from './components/common-background/common-background.component';
import { InfoWindowComponent } from './components/info-window/info-window.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { WeatherConditionComponent } from './components/weather-condition/weather-condition.component';
import { WindDirectionComponent } from './components/wind-direction/wind-direction.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    CommonBackgroundComponent,
    InfoWindowComponent,
    WeatherConditionComponent,
    WindDirectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NzSpinModule, 
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
