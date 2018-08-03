import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,keyframes
} from '@angular/animations';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  animations: [
    trigger('checking', [
      state('small', style({
      
        transform: 'scale(1)'
      })),
      state('big',   style({
       
        transform: 'scale(2)'
      })),
      transition('small<=> big', animate('1000ms 100ms  ease-in',keyframes([
        style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
        style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
        style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
      ]))),
     
    ]),
]
})
export class TestComponent implements OnInit {
state:string="small";
  constructor() { }

  ngOnInit() {
  }
  animate(){
    this.state=this.state==='small'?'big':'small';
  }

}
