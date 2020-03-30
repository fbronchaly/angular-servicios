import { Component } from '@angular/core';
import {DataService} from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  

  constructor ( private dataService: DataService){
    this.dataService.getDatos().subscribe (data => {
      console.log(data);
    })
  }




}
