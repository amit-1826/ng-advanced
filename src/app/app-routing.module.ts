import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {AboutEditComponent} from "./components/about/about-edit/about-edit.component";
import {DirectiveTextComponent} from "./components/directive-text/directive-text.component";
import {AccessDeniedComponent} from "./components/access-denied/access-denied.component";
import {canActivateUser, canDeactivateUser} from "./services/auth.guard";
import {TrackbyComponent} from "./components/trackby/trackby.component";
import { TemplateDrivenFormComponent } from './components/forms/template-driven-form/template-driven-form.component';
import { TemplateDrivenComponent } from './components/forms/template-driven/template-driven.component';
import { ReactiveComponent } from './components/forms/reactive/reactive.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canDeactivate: [canDeactivateUser]
  },
  {
    path: 'directive',
    component: DirectiveTextComponent,
    canActivate: [canActivateUser]
  },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      {
        path: 'edit',
        component: AboutEditComponent
      }
    ]
  },
  {
    path: 'access-denied',
    component: AccessDeniedComponent,
    title: 'Access Denied'
  },
  {
    path: 'track-by',
    component: TrackbyComponent
  },
  {
    path: 'forms-template-drive',
    component: TemplateDrivenFormComponent
  },
  {
    path: 'template-driven',
    component: TemplateDrivenComponent
  },
  {
    path: 'reactive-form',
    component: ReactiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
