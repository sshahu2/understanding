import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

 import {ComposemessageComponent }  from './../app/extras/composemessage/composemessage.component';
 import { PagenotfoundComponent }    from './../app/extras/pagenotfound/pagenotfound.component';
 import {LandingComponent }    from './../app/customers/landing/landing.component';
 import { TheatreComponent }    from './../app/customers/theatre/theatre.component';
  import { Test2Component }    from './../app/customers/test2/test2.component';




const appRoutes: Routes = [
  // {
  //   path: 'compose',
  //   component:ComposemessageComponent,
  //   outlet: 'popup'
  // },
  // {
  //   path: 'admin',
  //   loadChildren: 'app/admin/admin.module#AdminModule',
   
  // },
  // {
  //   path: 'crisis-center',
  //   loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule',
  //   data: { preload: true }
  // },
  {path:'theatre',component:TheatreComponent,data: {depth: 2}},
  {path:'landing',component:LandingComponent,data: {depth: 1}},
  {path:'test',component:Test2Component},
  { path: '',   redirectTo: '/landing', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true // <-- debugging purposes only
        

      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    
  ]
})
export class AppRoutingModule { }

