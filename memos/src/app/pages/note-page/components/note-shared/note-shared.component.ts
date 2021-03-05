import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Note } from 'src/app/models/note-model';
import { NoteService } from 'src/app/services/note.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-note-shared',
  templateUrl: './note-shared.component.html',
  styleUrls: ['./note-shared.component.scss']
})
export class NoteSharedComponent implements OnInit {
  @Input() note: Note;
  menuActiveTrigger: boolean = false;
  fileProgress: boolean = false;
  @Input() details: boolean; // means that menu not in noteComponent
  @Input() newNote: boolean; // means that menu in newPageComponent
  selecetdFile: File;
  menuActive: boolean = false; // means that one of menu item open
  constructor(public noteServcies: NoteService,
    public dialog: MatDialog,public shareSer:SharedService) {
  }

  ngOnInit(): void {
  }
  colorClick(index: number,id,shareFrom,shareTo) {
    this.shareSer.
    changColorById(index,id,shareFrom,shareTo);
  }
  @Output() setMenu = new EventEmitter<boolean>();
  setMenuStatus(status: boolean) {
    this.setMenu.emit(status);
  }
}
