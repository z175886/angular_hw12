import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<label [class.danger]="foodWarning">Has food allergy.</label>
  <input type="checkbox" [(ngModel)]="foodWarning"/><br>

 <label [class.makemegreen]="greenWarning">Make me green.</label>
 <input type="checkbox" [(ngModel)]="greenWarning" />

 <p [ngClass]="myClasses">class binding example</p>


 <input type="checkbox" [(ngModel)]="doesNotExercise" 
(change)="adjustCSS()"/>Does not exercise.
 <input type="checkbox" [(ngModel)]="over55" (change)="adjustCSS()"/> 
 Is over 55.
 <div *ngIf="doesNotExercise || over55" [ngClass]="myClasses " >
 Is at risk of heart disease. </div>


 <p [ngStyle]="myStyles">stye binding example</p>
 <p [style.font-weight]="myWeight">style binding example</p>
 <p [ngStyle]="myStyle">style binding example</p>



 `
  ,
  styles: [`
  .danger {
  color:orange;
  font-weight:bold;
  }
  .makemegreen{
 color:green;
 font-weight:bold;
 }
 .warning {
 font-weight:bold;
 }
 .danger {
 color:red; 
 }
 .highrisk {
 text-decoration:underline;
 }
 .warning {
 font-weight:bold;
 }
 .danger {
 color:red; 
 }

  `
  ]
})
export class AppComponent {
  foodWarning:Boolean
  greenWarning:Boolean
  myWeight = "bold";
  doesNotExercise = false;
  over55 = false;
  mycolor = "blue";
  myStyles = {
    'color':'red',
    'font-weight':'bold'
  }
  myStyle = {
    'font-weight':'bold',
    'color':this.mycolor,
    }
   

  constructor() {
  // Set default value to false.
 this.foodWarning = false;
 this.greenWarning = false;

  }
    myClasses = {
    warning: false,
    danger: false,
   
    }
    myClasses2 = {
    veryhighrisk:true
    }
    
    adjustCSS() {
      if(this.doesNotExercise && this.over55 ){
        this.myClasses.danger = true;
        this.myClasses.warning = true;
      }else{
        this.myClasses.danger = false;
        this.myClasses.warning = false;
      }

    }

}
