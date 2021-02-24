import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrashPageRoutingModule } from './trash-page-routing.module';
import { TrashPageComponent } from './trash-page.component';
import { NoteTrashComponent } from './components/note-trash/note-trash.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [TrashPageComponent, NoteTrashComponent],
  imports: [
    CommonModule,
    TrashPageRoutingModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class TrashPageModule { }
