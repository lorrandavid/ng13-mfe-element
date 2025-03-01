import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WrapperComponent } from './wrapper/wrapper.component';

function startsWith(path: string) {
  return (segments: UrlSegment[]) => {
    return segments.length > 0 && segments[0].path === path
      ? { consumed: segments }
      : null;
  };
}

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    matcher: startsWith('mfe1'),
    component: WrapperComponent,
    data: {
      elementName: 'mfe1-root',
      scriptURL: 'http://localhost:4201/mfe1.js'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
