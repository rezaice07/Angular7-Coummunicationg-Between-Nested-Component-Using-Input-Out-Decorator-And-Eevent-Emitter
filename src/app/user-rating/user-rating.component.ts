import { Component, OnInit, Input,Output,EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-user-rating',
  templateUrl: './user-rating.component.html',
  styleUrls: ['./user-rating.component.css']
})
export class UserRatingComponent implements OnInit
,OnChanges 
{

  @Input() customerName:string; 
  @Input() customerCellNo:string;
  @Output() customerDetailsInfo:EventEmitter<string>=new EventEmitter<string>();
  constructor() { 
    console.log('UserRatingComponent:constructor');
  }

  ngOnInit() {
    console.log('UserRatingComponent:ngOnInit');
  }

  ngOnChanges(){
    console.log('UserRatingComponent:ngOnChanges');
  }

  onCustomerClicked():void{
    
    let customerDetails=`Customer Details Information: ${this.customerName} ${this.customerCellNo}`;

    console.log(customerDetails);
    this.customerDetailsInfo.emit(customerDetails);
  }
}
