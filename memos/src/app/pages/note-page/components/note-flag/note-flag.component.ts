import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from 'src/app/models/note-model';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-flag',
  templateUrl: './note-flag.component.html',
  styleUrls: ['./note-flag.component.scss']
})
export class NoteFlagComponent implements OnInit {

  constructor(public noteServcies: NoteService) { }
  @Input() note: Note;
  menuActiveTrigger: boolean = false;
  fileProgress: boolean = false;
  public color=this.noteServcies.colors;
  ngOnInit(): void {
  }
  public flagNote(id) {
    this.noteServcies.addFlagToNote(id);
  }
  public deleteNote(id) {
    this.noteServcies.addFlagToTrash(id);
  }
  public storeNote(id) {
    this.noteServcies.addFlagToArchive(id);
  }
  upload(event: any,id,pin) {
    this.noteServcies.changeImgURL(event,id,pin,"note");
    
  }

    // Check current color is selected
    isSelect(index: number): boolean {
      return this.note.selectedColor == index;
    }
    // Color menu item click event handler
    colorClick(index: number,numb:number,shareTo) {
      this.noteServcies.changColor(this.color[index],numb,'flag',shareTo);
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
