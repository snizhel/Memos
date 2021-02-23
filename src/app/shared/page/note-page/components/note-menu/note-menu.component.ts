import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Note } from 'src/app/models/note-model';
import { NoteService } from 'src/app/services/note.service';
// import { MatSnackBar } from "@angular/material/snack-bar";
import { DialogueConfirmComponent } from '../dialogue-confirm/dialogue-confirm.component';

@Component({
  selector: 'app-note-menu',
  templateUrl: './note-menu.component.html',
  styleUrls: ['./note-menu.component.scss']
})
export class NoteMenuComponent implements OnInit {
  @Input() note: Note;
  @Input() newNote: boolean;
  @Input() details: boolean;
  public quantity:Number =0;

  Trash: Note[] = this.noteService.getNotes;
  constructor(private noteService: NoteService,
    // private labelService: LabelService,
    public dialog: MatDialog,
    // private snackBar: MatSnackBar
  ) { }


  public onClickGetNum(){
    // this.quantity = this.quantity+1;
    // for()
    // console.log(this.noteService.getNotes);
  }
  ngOnInit(): void {
  }
  // Delete or restore note
  deleteConfirmDialogue(): void {
    if (this.newNote) {
      this.deleteNote();
      console.log("Đã chuyển ghi chú vào thùng rác")
    } else if (!this.note.trash) {
      this.deleteNote();
    } else {
      this.deleteNote();
    }
    this.deleteNoteEmit();
  }

  deleteNote() {
    this.note.arhieved = false;
    this.note.trash = !this.note.trash;
  }

  @Output() noteDelete = new EventEmitter<boolean>();
  deleteNoteEmit() {
    this.noteDelete.emit(true);
  }
}