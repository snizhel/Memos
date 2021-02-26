import { Component, Input, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note-model';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-page',
  templateUrl: './note-page.component.html',
  styleUrls: ['./note-page.component.scss']
})
export class NotePageComponent implements OnInit {
  // @Input() notes: Note;
  notes : Note;
  constructor(public noteServcies:NoteService) { }

  ngOnInit(): void {

  }

  // check(numb) {
  //   // console.log(numb);
  //   // this.noteServcies.addToTrash(numb);
  //   // this.noteServcies.getNotes();
    
  //   this.noteServcies.addToTrash(numb);

  // }

  checkArray(){
    console.log(this.noteServcies.getNotes);
  }

}
