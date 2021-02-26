import {
  Component,
  OnInit,
  Input,
  ViewChild,
  EventEmitter,
  Output,
} from "@angular/core";
import { MatMenuModule, MatMenuTrigger } from "@angular/material/menu";
import { Note } from "../../../../../models/note-model";
import { DialogueConfirmComponent } from "../../components/dialogue-confirm/dialogue-confirm.component";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from "@angular/material/dialog";
import { NoteService } from "../../../../../services/note.service";

@Component({
  selector: "app-note-menu",
  templateUrl: "./note-menu.component.html",
  styleUrls: ["./note-menu.component.scss"],
})
export class NoteMenuComponent implements OnInit {
  @Input() note: Note;
  @Input() details: boolean; // means that menu not in noteComponent
  @Input() newNote: boolean; // means that menu in newPageComponent
  selecetdFile: File;
  menuActive: boolean = false; // means that one of menu item open

  constructor(
    private noteService: NoteService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {}

  // Image upload event handler
  onFileUpload(event) {
    this.selecetdFile = event.target.files[0];
    const reader = new FileReader();

    // Set uploading start/end handlers
    let setFileProgress = this.setFileProgress.bind(this);
    reader.onloadstart = function () {
      setFileProgress(true);
    };
    reader.onloadend = function () {
      // Load emulation
      setTimeout(() => {
        setFileProgress(false);
      }, 1000);
    };

    // Set file to note
    reader.onload = () => {
      this.note.imagePreview = reader.result as string;
      this.noteService.changeImg(this.note.id,'note',this.note.imagePreview,this.note.pin)
    };
    reader.readAsDataURL(this.selecetdFile);
  }

  // Outputing file upload start/end event
  @Output() fileProgress = new EventEmitter<boolean>();
  setFileProgress(show: boolean) {
    this.fileProgress.emit(show);
  }

}
