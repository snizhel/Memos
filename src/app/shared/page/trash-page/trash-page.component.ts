import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-trash-page',
  templateUrl: './trash-page.component.html',
  styleUrls: ['./trash-page.component.scss']
})
export class TrashPageComponent implements OnInit {

  constructor(private noteServcies:NoteService) { }

  ngOnInit(): void {
    this.noteServcies.getTrashData();
  }

}
