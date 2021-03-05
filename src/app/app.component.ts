import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'input-val';
  currval='';
  
  public fname="";
  getinputval(val:any){
    console.log(val);
    
  }
  getinputval1(val:any){
    console.log(val);
    this.currval=val;
  }
}
