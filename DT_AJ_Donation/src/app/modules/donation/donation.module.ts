import { NgModule } from '@angular/core';
import { DonationslibModule } from 'donationslib';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [],
  imports: [
    DonationslibModule.forRoot(environment)
  ]
})
export class DonationModule { }
