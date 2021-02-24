import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  constructor(public noteServcies:NoteService ) { }

  ngOnInit(): void {
  }
  deleteNote(numb){
    this.noteServcies.deleteArchiveToTrash(numb);
  }
}
