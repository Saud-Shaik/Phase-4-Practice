// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-child',
//   templateUrl: './child.component.html',
//   styleUrls: ['./child.component.css']
// })
// export class ChildComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  inputs: [`pdata`],
  outputs: [`cevent`]
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public pdata: string | undefined;
  cevent= new EventEmitter<string>();

  onChange(value:string){
    this.cevent.emit(value);
  }
}

