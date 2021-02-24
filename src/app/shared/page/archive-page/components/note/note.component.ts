import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from 'src/app/models/note-model';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  constructor(public noteServcies: NoteService) { }
  @Input() note: Note;
  menuActiveTrigger: boolean = false;
  public color=this.noteServcies.colors;
  ngOnInit(): void {
  }
  // public flagNote(numb) {
  //   this.noteServcies.addFlagToNote(numb);
  // }
  public deleteNote(numb) {
    this.noteServcies.deleteArchiveToTrash(numb);
  }
  // public storeNote(numb) {
  //   this.noteServcies.addFlagToArchive(numb);
  // }

    // Check current color is selected
    isSelect(index: number): boolean {
      return this.note.selectedColor == index;
    }
    // Color menu item click event handler
    colorClick(index: number,numb:number) {
      // this.noteServcies.changColor(this.color[index],numb,'archive');
      // console.log(this.color[index])
      this.noteServcies.changColor(this.color[index],numb,'archive')
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
