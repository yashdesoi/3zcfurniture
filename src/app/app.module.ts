import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {LayoutFullModule} from "./layouts/layout-full/layout-full.module";
import {LayoutSideModule} from "./layouts/layout-side/layout-side.module";
import {IvyGalleryModule} from "angular-gallery";
import { FaqComponent } from './pages/faq/faq.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from "@angular/material/expansion";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    FaqComponent,
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      FlexLayoutModule,
      LayoutFullModule,
      LayoutSideModule,
      IvyGalleryModule,
      BrowserAnimationsModule,
      MatExpansionModule,
      HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
