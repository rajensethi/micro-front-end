import { NgModule, ModuleWithProviders } from '@angular/core';
import { MasterlibComponent } from './masterlib.component';
import { Routes, RouterModule } from '@angular/router';
import { StateComponent } from './state/state.component';

const route: Routes = [
  {
    path: '',
    redirectTo: 'masternew'
  },
  {
    path: 'masternew',
    component: MasterlibComponent
  },
  {
    path: 'state',
    component: StateComponent
  },
]

@NgModule({
  declarations: [MasterlibComponent, StateComponent],
  imports: [ 
    RouterModule.forChild(route)
  ],
  exports: [MasterlibComponent,StateComponent]
})
export class MasterlibModule { 
  static forRoot(environment?: any): ModuleWithProviders {
    return {
      ngModule: MasterlibModule,
      providers: [
        {
          provide: 'inj_environment', // you can also use InjectionToken
          useValue: environment
        }
      ]
    };
  }
}
