import { Injectable } from '@angular/core';
import { Note } from '../models/note-model';
import * as uuid from 'uuid';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private notes: Note[];
  private trashs: Note[];
  private archive: Note[];
  private flag: Note[];
  private test: Note[];

  days = 7;
  date = new Date();
  currentDate = new Date();
  res = this.date.setTime(this.date.getTime() + (this.days * 24 * 60 * 60 * 1000));

  colors: string[] = [
    // Available menu colors
    "#fefefe",
    "#f28c80",
    "#f6bf02",
    "#fff478",
    "#cdfe91",
    "#a6fdea",
    "#cdeff8",
    "#afcbfa",
    "#d5affc",
    "#fdcfe9",
    "#e2cba9",
    "#e9eaee",
  ];


  constructor(private http: HttpClient) {
    this.test = [];
    this.notes = [];
    this.trashs = [];
    this.archive = [];
    this.flag = [];
  }

  // Example note
  getDefaultNote(): Note {
    return {
      id: uuid.v4(), title: 'firsttitle', description: 'firstdescription', pin: false,
      labels: [], selectedColor: 0, color: '#fefefe', todoList: [],imagePreview:"",
      showTodo: false, arhieved: false, trash: false,
    };
  }
  // Generate emptyNote
  getEmptyNote(): Note {
    return {
      id: uuid.v4(), title: "", description: "", labels: [], selectedColor: 0, pin: false,imagePreview:"",
      color: '#fefefe', todoList: [], showTodo: false, arhieved: false, trash: false, num: this.notes.length + 1
    }
  }


  // Note empty checking logic
  checkNoteIsEmpty(note: Note) {
    if (note.title || note.description || note.imagePreview ||
      (note.todoList.length && note.showTodo)) return false;
    else return true;
  }

  public async addNote(newNote: Note) {
    newNote.id = uuid.v4();
    await this.http.post(environment.endpoint + "notes", newNote).toPromise();
  }

  public async getNotesData() {
    let data: any;
    let tempData = await this.http.get(environment.endpoint + "notes").toPromise();
    data = tempData['notes'];
    this.notes = await data;
  }
  public async getFlagsData() {
    let data: any;
    let tempData = await this.http.get(environment.endpoint + "flag").toPromise();
    data = tempData['flags'];
    this.flag = await data;
  }

  public async getArchivesData() {
    let data: any;
    let tempData = await this.http.get(environment.endpoint + "archive").toPromise();
    data = tempData['archives'];
    this.archive = await data;
  }

  public addToTrash(id: String) {
    let url = `${environment.endpoint}notes/delete?id=${id}`;
    for (let i = 0; i < this.notes.length; i++) {
      if (this.notes[i].id == id) {
        this.http.delete(url).toPromise();
        this.http.post(environment.endpoint + "trash", this.notes[i]).toPromise();
      }
    }
  }

  public async getTrashData() {
    let data: any;
    let tempData = await this.http.get(environment.endpoint + "trash").toPromise();
    data = tempData['noteTrashs'];
    this.trashs = await data;
  }

  public deleteInTrash(id: String) {
    let url = `${environment.endpoint}trash/delete?id=${id}`;
    this.http.delete(url).toPromise();

  }
  addNoteToArchive(numb) {
    let id = numb;
    let url = `${environment.endpoint}notes/delete?id=${id}`;
    for (let i = 0; i < this.notes.length; i++) {
      if (this.notes[i].id == id) {
        this.http.delete(url).toPromise();
        this.http.post(environment.endpoint + "archive", this.notes[i]).toPromise();
      }
    }
  }

  addFlagToNote(numb) {
    let id = numb;
    // console.log(id);
    let url = `${environment.endpoint}flag/delete?id=${id}`;
    for (let i = 0; i < this.flag.length; i++) {
      if (this.flag[i].id == id) {
        this.http.delete(url).toPromise();
        this.flag[i].pin = false;
        console.log(this.flag[i].pin);
        this.http.post(environment.endpoint + "notes", this.flag[i]).toPromise();
      }
    }
  }

  addNoteToFlag(numb) {
    let id = numb;
    // console.log(id);
    let url = `${environment.endpoint}notes/delete?id=${id}`;
    for (let i = 0; i < this.notes.length; i++) {
      if (this.notes[i].id == id) {
        this.http.delete(url).toPromise();
        this.notes[i].pin = true;
        console.log(this.notes[i].pin);
        this.http.post(environment.endpoint + "flag", this.notes[i]).toPromise();
      }
    }
  }

  addFlagToArchive(numb) {
    let id = numb;
    let url = `${environment.endpoint}flag/delete?id=${id}`;
    for (let i = 0; i < this.flag.length; i++) {
      if (this.flag[i].id == id) {
        this.http.delete(url).toPromise();
        this.http.post(environment.endpoint + "archive", this.flag[i]).toPromise();
      }
    }
  }

  addFlagToTrash(numb) {
    let id = numb;
    let url = `${environment.endpoint}flag/delete?id=${id}`;
    for (let i = 0; i < this.flag.length; i++) {
      if (this.flag[i].id == id) {
        this.http.delete(url).toPromise();
        this.http.post(environment.endpoint + "trash", this.flag[i]).toPromise();
      }
    }
  }

  deleteArchiveToTrash(numb) {
    let id = numb;
    let url = `${environment.endpoint}archive/delete?id=${id}`;
    for (let i = 0; i < this.archive.length; i++) {
      if (this.archive[i].id == id) {
        this.http.delete(url).toPromise();
        this.http.post(environment.endpoint + "trash", this.archive[i]).toPromise();
      }
    }
  }
  public get getTest(): Note[] {
    return this.test;
  }

  public get getFlag(): Note[] {
    return this.flag;
  }
  public get getNotes(): Note[] {
    return this.notes;
  }

  public get getArchive(): Note[] {
    return this.archive;
  }

  public get getTrash(): Note[] {
    return this.trashs;
  }

  public changColor(color, numb, page) {
    let id = numb;
    let temp = {
      "id": id,
      "color": color
    }
    if (page == 'note') {
      let url = `${environment.endpoint}notes/update/color`;
      this.http.put(url, temp).toPromise();
    }
    else if (page == 'flag') {
      let url = `${environment.endpoint}flag/update/color`;
      this.http.put(url, temp).toPromise();
    } else if (page == 'archive') {
      let url = `${environment.endpoint}archive/update/color`;
      this.http.put(url, temp).toPromise();
    }

  }

  public changeImg(id,page,img:string,pin){
    let temp = {
      "id": id,
      "img": img,
      "page":page,
      "pin":pin
    }

    if(page == 'archive'&&pin==false){
      let url = `${environment.endpoint}archive/update/img`;
      this.http.put(url, temp).toPromise();
    }else if (page == 'note'){
      let url = `${environment.endpoint}notes/update/img`;
      this.http.put(url, temp).toPromise();
    }
  }

  public deteleAllOnDays() {
    let current = this.currentDate.getTime();
    if (current == this.res) {
      let url = `${environment.endpoint}trash/delete/all`;
      this.http.delete(url).toPromise();
    }
  }

  public deleteAll() {
    let url = `${environment.endpoint}trash/delete/all`;
    this.http.delete(url).toPromise();
  }

  public getColorByNum(num: number, page: string) {
    if (page == 'note') { return this.notes[num - 1].color; }
    else if (page == 'flag') { return this.flag[num - 1].color; }
    else if (page == 'trash') { return this.trashs[num - 1].color; }
  }
  public getColorByNumArchive(num: number, page: string) {
    if (page == 'archive') { return this.archive[num - 1].color; }


  }


  // Swaps notes
  changingNotes(oldNote: Note, newNote: Note) {
    let oldIndex = this.notes.findIndex(elem => elem == oldNote);
    let newIndex = this.notes.findIndex(elem => elem == newNote);
    [this.notes[oldIndex], this.notes[newIndex]] = [this.notes[newIndex], this.notes[oldIndex]]
  }
}
