import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArchivePageRoutingModule } from './archive-page-routing.module';
import { ArchivePageComponent } from './archive-page.component';
import { NoteComponent } from './components/note/note.component';
import { NewNoteComponent } from './components/new-note/new-note.component';


@NgModule({
  declarations: [ArchivePageComponent, NoteComponent, NewNoteComponent],
  imports: [
    CommonModule,
    ArchivePageRoutingModule
  ]
})
export class ArchivePageModule { }
