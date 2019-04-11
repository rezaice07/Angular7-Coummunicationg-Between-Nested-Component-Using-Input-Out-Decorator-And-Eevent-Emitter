import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';

import { 
  FormsModule, 
   } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularLifeCycleHookComponent } from './angular-life-cycle-hook/angular-life-cycle-hook.component';
import { ComponentNestedComponent } from './component-nested/component-nested.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularLifeCycleHookComponent,
    ComponentNestedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //for ngModel input directive
    RouterModule.forRoot([
      {
        path: 'aboutme',       
        component: AngularLifeCycleHookComponent
      },
      {
        path: 'aboutme/:name',       
        component: AngularLifeCycleHookComponent
      },
       {
        path: 'nglifecyclehook/:id/:name/:year',       
        component: AngularLifeCycleHookComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
