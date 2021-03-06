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
  fileProgress: boolean = false;
  @Input() details: boolean; // means that menu not in noteComponent
  @Input() newNote: boolean; // means that menu in newPageComponent
  selecetdFile: File;
  menuActive: boolean = false; // means that one of menu item open
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
    colorClick(index: number,numb:number,shareTo) {
      // this.noteServcies.changColor(this.color[index],numb,'archive');
      // console.log(this.color[index])
      // console.log(shareTo);
      this.noteServcies.changColor(this.color[index],numb,'archive',shareTo)
    }
    upload(event: any,id,pin) {
      this.noteServcies.changeImgURL(event,id,pin,"archive");
      
    }
  
  

    // Outputing menu opened trigger
    @Output() setMenu = new EventEmitter<boolean>();
    setMenuStatus(status: boolean) {
      this.setMenu.emit(status);
    }
}
