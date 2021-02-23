import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Note } from 'src/app/models/note-model';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Input() note: Note;
  menuActiveTrigger:boolean = false;
 
  constructor(public noteServcies:NoteService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  public deleteNote(numb){
    this.noteServcies.addToTrash(numb);
  }

  public storeNote(numb){
    this.noteServcies.addNoteToArchive(numb);
  }

  public noteFlag(numb){
    // console.log(numb);
    this.noteServcies.addNoteToFlag(numb);
  }

}
