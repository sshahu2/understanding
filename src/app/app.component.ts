import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, group, query, stagger, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [trigger('routerAnimation', [
    transition('1 => 2', [
      style({ height: '!' }),
      query(':enter', style({ transform: 'translateX(100%)' })),
      query(':enter,:leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
      group([
        query(':leave', [animate('10s cubic-bezier(0.35,0,0.25,1)', style({ transform: 'translateX(-100%)' }))]),
        query(':enter', [animate('10s cubic-bezier(0.35,0,0.25,1)', style({ transform: 'translateX(0)' }))])
      ])
    ]),
    transition('2 => 1', [
      style({ height: '!' }),
      query(':enter', style({ transform: 'translateX(-100%)' })),
      query(':enter,:leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
      group([
        query(':leave', [animate('10s cubic-bezier(0.35,0,0.25,1)', style({ transform: 'translateX(100%)' }))]),
        query(':enter', [animate('10s cubic-bezier(0.35,0,0.25,1)', style({ transform: 'translateX(0)' }))])
      ])
    ])
  ])
  ]
})
export class AppComponent {
  title = 'app';

  getDepth(outlet) {
    return outlet.activatedRouteData['depth'];
  }
}
