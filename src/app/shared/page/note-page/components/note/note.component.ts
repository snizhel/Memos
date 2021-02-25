import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Note } from 'src/app/models/note-model';
import { NoteService } from 'src/app/services/note.service';
import { EditNoteModalComponent } from '../edit-note-modal/edit-note-modal.component';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Input() note: Note;
  menuActiveTrigger: boolean = false;
  fileProgress: boolean = false;
  @Input() details: boolean; // means that menu not in noteComponent
  @Input() newNote: boolean; // means that menu in newPageComponent
  selecetdFile: File;
  menuActive: boolean = false; // means that one of menu item open


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
  setFileProgress(fileProgress: boolean) {
    this.fileProgress = fileProgress;
  }
  // Open modal note edit
  openDialog(note: any): void {
    const dialogRef = this.dialog.open(EditNoteModalComponent, {
      width: '600px',
      data: note
    });
    dialogRef.afterClosed().subscribe(result => {
      if (!note.todoList.length) this.note.showTodo = false;
    });
  }

  // Outputing menu opened trigger
  @Output() setMenu = new EventEmitter<boolean>();
  setMenuStatus(status: boolean) {
    this.setMenu.emit(status);
  }

  

}
