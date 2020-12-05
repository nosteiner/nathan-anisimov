import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SingleSiteComponent } from './components/single-site/single-site.component';


const routes: Routes = [
  { path: '', redirectTo: 'sites', pathMatch: 'full' },
  { path: 'sites', component: SideBarComponent },
  { path: 'sites/:siteId', component: SingleSiteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
