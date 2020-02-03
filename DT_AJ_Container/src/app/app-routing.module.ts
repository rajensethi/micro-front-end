import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'masters',
  //   pathMatch: 'full'
  // },
  {
    path: 'donations', loadChildren: './modules/donation/donation.module#DonationModule'
  },
  {
    path: 'masternew', loadChildren: './modules/master/master.module#MasterModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
