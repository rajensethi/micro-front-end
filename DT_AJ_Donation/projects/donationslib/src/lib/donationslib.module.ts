import { ModuleWithProviders, NgModule } from '@angular/core';
import { DonationslibComponent } from './donationslib.component';
import { Routes, RouterModule } from '@angular/router';

const route: Routes = [
  {
    path: '',
    redirectTo: 'donation'
  },
  {
    path: 'donation',
    component: DonationslibComponent
  },
]

@NgModule({
  declarations: [DonationslibComponent],
  imports: [
    RouterModule.forChild(route)
  ],
  exports: [DonationslibComponent]
})
export class DonationslibModule {
  static forRoot(environment?: any): ModuleWithProviders {
    return {
      ngModule: DonationslibModule,
      providers: [
        {
          provide: 'inj_environment', // you can also use InjectionToken
          useValue: environment
        }
      ]
    };
  }
}
