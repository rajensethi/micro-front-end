import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router:Router)
  {

  };
  title = 'DT_AJ_ContainerUI';
  btnClick(sUrl:string){
    this.router.navigateByUrl(sUrl);
  };
}
