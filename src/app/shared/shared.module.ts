import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import {DialogModule} from 'primeng/dialog';
import {TabViewModule} from 'primeng/tabview';
import {ButtonModule} from 'primeng/button';




@NgModule({
  imports: [
    CommonModule,
    DialogModule,
    TabViewModule,
    ButtonModule
  ],
  exports: [
    DialogModule,
    TabViewModule,
    ButtonModule
  ],
  declarations: []
})
export class SharedModule { }
