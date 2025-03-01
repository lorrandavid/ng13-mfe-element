import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { createCustomElement } from '@angular/elements';
import { OffersComponent } from './offers/offers.component';
import { RegisterComponent } from './register/register.component';
import { environment } from 'src/environments/environment';

const routes: Routes = [
  {
    path: 'mfe1',
    redirectTo: 'mfe1/offers',
    pathMatch: 'full'
  },
  {
    path: 'mfe1/offers',
    component: OffersComponent
  },
  {
    path: 'mfe1/register',
    component: RegisterComponent
  }
];

if (!environment.production) {
  routes.push({
    path: '',
    redirectTo: 'mfe1/offers',
    pathMatch: 'full'
  });
}

@NgModule({
  declarations: [
    AppComponent,
    OffersComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) {
    const customElement = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('mfe1-root', customElement);
  }

  ngDoBootstrap() {}
}
