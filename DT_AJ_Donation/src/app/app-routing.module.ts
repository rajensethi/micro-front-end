import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'donations',
    pathMatch: 'full'
  },
  {
    path: 'donations', loadChildren: './modules/donation/donation.module#DonationModule'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
