import { Component, Input, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note-model';

@Component({
  selector: 'app-note-edit-body',
  templateUrl: './note-edit-body.component.html',
  styleUrls: ['./note-edit-body.component.scss']
})
export class NoteEditBodyComponent implements OnInit {
  @Input() note: Note;
  @Input() fileProgress: boolean;
  constructor() { }

  ngOnInit(): void {
  }
  test(a){
    console.log(a);
  }
}
