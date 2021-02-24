import { Component, OnInit } from '@angular/core';
import { NoteService } from './services/note.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'memos';
  constructor(public noteServcies:NoteService){}
  ngOnInit(): void {
    // this.noteServcies.
    this.noteServcies.deteleAllOnDays();
  }
}
