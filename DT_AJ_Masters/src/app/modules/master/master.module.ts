import { NgModule } from '@angular/core';
import { MasterlibModule } from 'masterlib';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [],
  imports: [
    MasterlibModule.forRoot(environment)
  ]
})
export class MasterModule { }
