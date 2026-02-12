import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  imports: [],
  templateUrl: './variables.html',
  styleUrl: './variables.css',
})
export class Variables {
  courseName: string = "Angular 21 tutorial";
  currentVersion =  "v.21";
  roleNoe: number = 21;
  productPrice = 1200.00;
  isActive: boolean = false;
  isPresent = true;
  currentDate: Date = new Date();
  
}
