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
  menuActiveTrigger:boolean = false;
  constructor(private noteService: NoteService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  public vitri;

  check(numb:Number){
    console.log(numb);
  }
    // // Open modal note edit
    // openDialog(note: any): void {
    //   const dialogRef = this.dialog.open(EditNoteModalComponent, {
    //     width: '600px',
    //     data:note
    //   });
    //   dialogRef.afterClosed().subscribe(result => {
    //     if(!note.todoList.length) this.note.showTodo = false;
    //   });
    // }

}
