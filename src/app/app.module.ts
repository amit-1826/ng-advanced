import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EvenOddDirective} from './even-odd.directive';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {AboutEditComponent} from './components/about/about-edit/about-edit.component';
import {DirectiveTextComponent} from './components/directive-text/directive-text.component';
import {AccessDeniedComponent} from './components/access-denied/access-denied.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpInterceptor} from "./http.interceptor";
import { TrackbyComponent } from './components/trackby/trackby.component';

@NgModule({
  declarations: [
    AppComponent,
    EvenOddDirective,
    HomeComponent,
    AboutComponent,
    AboutEditComponent,
    DirectiveTextComponent,
    AccessDeniedComponent,
    TrackbyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
