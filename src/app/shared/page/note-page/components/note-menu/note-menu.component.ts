import { Component, Input, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note-model';

@Component({
  selector: 'app-note-menu',
  templateUrl: './note-menu.component.html',
  styleUrls: ['./note-menu.component.scss']
})
export class NoteMenuComponent implements OnInit {
  @Input() note: Note;
  @Input() newNote: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
