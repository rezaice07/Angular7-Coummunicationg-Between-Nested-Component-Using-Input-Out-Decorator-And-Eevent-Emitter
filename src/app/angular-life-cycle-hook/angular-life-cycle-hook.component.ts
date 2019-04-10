import { Component, 
  OnInit,
  OnChanges,
  SimpleChanges,


  Input
} from '@angular/core';

import { FormsModule} from '@angular/forms';
import { EmployeeModel} from '../models/EmployeeModel';


@Component({
  selector: 'app-angular-life-cycle-hook',
  templateUrl: './angular-life-cycle-hook.component.html',
  styleUrls: ['./angular-life-cycle-hook.component.css']
})
export class AngularLifeCycleHookComponent implements OnInit ,OnChanges{

  public customerNameInfo:string;
  public customerCellNoInfo:string;

  public customerDetailInformation:string;

  public UserName: string=""; 
  constructor() {     
    console.log(`AngularLifeCycleHookComponent:constructor()`);

    this.customerNameInfo=`Rejwanul Reja`;
    this.customerCellNoInfo='+8801718055626';
  }

  ngOnInit() {
    console.log(`AngularLifeCycleHookComponent:ngOnInit()`);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(`AngularLifeCycleHookComponent:ngOnChanges()`);    
 }

 getCustomerInformation(details:string):void{
    this.customerDetailInformation=details;
 }

}
