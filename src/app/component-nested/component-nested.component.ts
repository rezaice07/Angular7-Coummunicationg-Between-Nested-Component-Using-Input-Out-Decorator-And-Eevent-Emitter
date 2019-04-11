import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-component-nested',
  templateUrl: './component-nested.component.html',
  styleUrls: ['./component-nested.component.css']
})
export class ComponentNestedComponent implements OnInit
  ,
  OnChanges {
  @Input() CustomerEmail: string;
  @Input() customerName: string;
  @Input() customerCellNo: string;
  @Output() customerDetailsInfo: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    console.log('UserRatingComponent:constructor');

    console.log(this.CustomerEmail);
  }


  ngOnInit() {
    console.log('UserRatingComponent:ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propertyName in changes) {
      let change = changes[propertyName];
      let currentChange = JSON.stringify(change.currentValue);
      let previousChange = JSON.stringify(change.previousValue);

      console.log(`propertyName:${propertyName}, currentChange: ${currentChange}, previous Change: ${previousChange} `);
    }
  }

  onCustomerClicked(): void {
    let customerDetails = `Customer Details Information: ${this.customerName} ${this.customerCellNo}`;
    console.log(customerDetails);
    this.customerDetailsInfo.emit(customerDetails);
  }

}
