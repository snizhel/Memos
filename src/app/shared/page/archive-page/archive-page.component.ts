import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-archive-page',
  templateUrl: './archive-page.component.html',
  styleUrls: ['./archive-page.component.scss']
})
export class ArchivePageComponent implements OnInit {

  constructor(private noteServices:NoteService) { }

  ngOnInit(): void {
    this.noteServices.getArchivesData();
  }

}
