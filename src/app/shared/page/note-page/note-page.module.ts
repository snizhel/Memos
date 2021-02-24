import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotePageRoutingModule } from './note-page-routing.module';
import { NotePageComponent } from './note-page.component';
import { NewNoteComponent } from './components/new-note/new-note.component';
import { NoteEditBodyComponent } from './components/note-edit-body/note-edit-body.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { FormsModule } from '@angular/forms';
import { TextFieldModule } from '@angular/cdk/text-field';
import { NoteComponent } from './components/note/note.component';
import { DialogueConfirmComponent } from './components/dialogue-confirm/dialogue-confirm.component';
import { NoteFlagComponent } from './components/note-flag/note-flag.component';

@NgModule({
  declarations: [NotePageComponent, NewNoteComponent, NoteEditBodyComponent, NoteComponent, DialogueConfirmComponent, NoteFlagComponent],
  imports: [
    CommonModule,
    MatProgressBarModule,
    TextFieldModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    NotePageRoutingModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
  ]
})

export class NotePageModule { }