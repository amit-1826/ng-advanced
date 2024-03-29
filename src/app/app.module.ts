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
import { ViewNoneComponent } from './components/encapsulation/view-none/view-none.component';
import { ViewEmulatedComponent } from './components/encapsulation/view-emulated/view-emulated.component';
import { ViewShadowDomComponent } from './components/encapsulation/view-shadow-dom/view-shadow-dom.component';
import { ParentComponent } from './components/content-projection/parent/parent.component';
import { ChildComponent } from './components/content-projection/child/child.component';
import { ServiceProviderComponent } from './components/providers/service-provider/service-provider.component';
import { TestService } from './services/test.service';
import { TemplateDrivenFormComponent } from './components/forms/template-driven-form/template-driven-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenComponent } from './components/forms/template-driven/template-driven.component';
import { ReactiveComponent } from './components/forms/reactive/reactive.component';
import { ForbiddenNameValidatorDirective } from './components/forms/template-driven-form/forbidden-name-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    EvenOddDirective,
    HomeComponent,
    AboutComponent,
    AboutEditComponent,
    DirectiveTextComponent,
    AccessDeniedComponent,
    TrackbyComponent,
    ViewNoneComponent,
    ViewEmulatedComponent,
    ViewShadowDomComponent,
    ParentComponent,
    ChildComponent,
    ServiceProviderComponent,
    TemplateDrivenFormComponent,
    TemplateDrivenComponent,
    ReactiveComponent,
    ForbiddenNameValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpInterceptor, multi: true}, TestService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
