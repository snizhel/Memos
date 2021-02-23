import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrashPageRoutingModule } from './trash-page-routing.module';
import { TrashPageComponent } from './trash-page.component';


@NgModule({
  declarations: [TrashPageComponent],
  imports: [
    CommonModule,
    TrashPageRoutingModule
  ]
})
export class TrashPageModule { }
