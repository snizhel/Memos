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
  menuActiveTrigger: boolean = false;
  public color=this.noteServcies.colors;



  constructor(public noteServcies: NoteService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  public deleteNote(numb) {
    this.noteServcies.addToTrash(numb);
  }

  public storeNote(numb) {
    this.noteServcies.addNoteToArchive(numb);
  }

  public noteFlag(numb) {
    // console.log(numb);
    this.noteServcies.addNoteToFlag(numb);
  }

  // Check current color is selected
  isSelect(index: number): boolean {
    return this.note.selectedColor == index;
  }
  // Color menu item click event handler
  colorClick(index: number,numb:number) {
    this.noteServcies.changColor(this.color[index],numb,'note');
  }

  // getColor(index: number): string {
  //   return this.colors[index];
  // }

  // Outputing menu opened trigger
  @Output() setMenu = new EventEmitter<boolean>();
  setMenuStatus(status: boolean) {
    this.setMenu.emit(status);
  }

}
