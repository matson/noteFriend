import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud_operations_example_project';
  isMenuRequired=false;
  isNavBarRequired=false;
  constructor(private router: Router){
  }

  //to make the menu only appear when logged in
  ngDoCheck(): void {
    let currentUrl=this.router.url;
    if(currentUrl=='/login' || currentUrl=='/register'){
      this.isMenuRequired=false;
      this.isNavBarRequired=false;
    }else{
      this.isMenuRequired=true;
      this.isNavBarRequired=true;
    }
  }



}
