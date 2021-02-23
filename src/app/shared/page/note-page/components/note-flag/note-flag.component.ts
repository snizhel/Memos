import { Component, Input, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note-model';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-flag',
  templateUrl: './note-flag.component.html',
  styleUrls: ['./note-flag.component.scss']
})
export class NoteFlagComponent implements OnInit {

  constructor(public noteServcies:NoteService) { }
  @Input() note: Note;
  menuActiveTrigger:boolean = false;
  ngOnInit(): void {
  }
  public flagNote(numb){
    this.noteServcies.addFlagToNote(numb);
  }
  public deleteNote(numb){
    this.noteServcies.addFlagToTrash(numb);
  } 
  public storeNote(numb){
    this.noteServcies.addFlagToArchive(numb);
  }
}
