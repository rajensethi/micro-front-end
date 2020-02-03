import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'masternew',
    pathMatch: 'full'
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
