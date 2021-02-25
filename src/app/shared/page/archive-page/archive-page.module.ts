import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArchivePageRoutingModule } from './archive-page-routing.module';
import { ArchivePageComponent } from './archive-page.component';
import { NoteComponent } from './components/note/note.component';
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu';
import { NoteMenuComponent } from './components/note-menu/note-menu.component'
import { MatProgressBarModule } from '@angular/material/progress-bar'
@NgModule({
  declarations: [ArchivePageComponent, NoteComponent, NoteMenuComponent],
  imports: [
    CommonModule,
    ArchivePageRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatProgressBarModule
  ]
})
export class ArchivePageModule { }
