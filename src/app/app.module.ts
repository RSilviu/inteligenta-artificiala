import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {IaHeaderComponent} from "./ia-header/ia-header.component";
import {IaContentComponent} from './ia-content/ia-content.component';
import {B1PageComponent} from './pages/b1-page/b1-page.component';
import {AppRoutingModule} from "./app-routing-module/app-routing-module.module";
import {HomeComponent} from "./pages/home/home.component";
import {B2PageComponent} from './pages/b2-page/b2-page.component';
import {B3PageComponent} from './pages/b3-page/b3-page.component';
import {B4PageComponent} from './pages/b4-page/b4-page.component';
import {B5PageComponent} from './pages/b5-page/b5-page.component';
import {B6PageComponent} from './pages/b6-page/b6-page.component';
import {B7PageComponent} from './pages/b7-page/b7-page.component';


@NgModule({
  declarations: [
    AppComponent,
    IaHeaderComponent,
    IaContentComponent,
    B1PageComponent,
    HomeComponent,
    B2PageComponent,
    B3PageComponent,
    B4PageComponent,
    B5PageComponent,
    B6PageComponent,
    B7PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
