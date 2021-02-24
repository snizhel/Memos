import { Injectable } from '@angular/core';
import { Note } from '../models/note-model';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private notes: Note[];
  private trashs: Note[];
  private archive: Note[];
  private flag: Note[];

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

  constructor() {
    // Program default notes
    // this.notes = [this.getDefaultNote()];
    this.notes = [];
    this.trashs = [];
    this.archive = [];
    this.flag = [];
    // this.flag=[];
  }

  // Example note
  getDefaultNote(): Note {
    return {
      id: uuid.v4(), title: 'firsttitle', description: 'firstdescription', pin: false,
      labels: [], selectedColor: 0, color: '#fefefe', todoList: [],
      showTodo: false, arhieved: false, trash: false,
    };
  }
  // Generate emptyNote
  getEmptyNote(): Note {
    return {
      id: uuid.v4(), title: "", description: "", labels: [], selectedColor: 0, pin: false,
      color: '#fefefe', todoList: [], showTodo: false, arhieved: false, trash: false, num: this.notes.length + 1
    }
  }


  // Note empty checking logic
  checkNoteIsEmpty(note: Note) {
    if (note.title || note.description || note.imagePreview ||
      (note.todoList.length && note.showTodo)) return false;
    else return true;
  }

  addNote(newNote: Note) {
    newNote.id = uuid.v4();
    this.notes.push(newNote);
  }


  addToTrash(numb: number) {
    this.trashs.push(this.notes[numb - 1]);
    this.notes.splice(numb - 1, 1);
  }
  addNoteToArchive(numb: number) {
    this.archive.push(this.notes[numb - 1]);
    this.notes.splice(numb - 1, 1);
  }

  addFlagToNote(numb: number) {
    this.notes.push(this.flag[numb - 1]);
    this.flag.splice(numb - 1, 1);
  }

  addNoteToFlag(numb: number) {
    this.flag.push(this.notes[numb - 1]);
    this.notes.splice(numb - 1, 1);
  }

  addFlagToArchive(numb: number) {
    this.archive.push(this.flag[numb - 1]);
    this.flag.splice(numb - 1, 1);
  }

  addFlagToTrash(numb: number) {
    this.trashs.push(this.flag[numb - 1]);
    this.flag.splice(numb - 1, 1);
  }

  deleteInTrash(numb: number) {
    this.trashs.splice(numb - 1, 1);
  }
  deleteArchiveToTrash(numb: number) {
    this.trashs.push(this.archive[numb - 1]);
    this.archive.splice(numb - 1, 1);
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
    if (page == 'flag') {
      this.flag[numb - 1].color = color;
    } else if (page == 'note') {
      this.notes[numb - 1].color = color;
    }else if (page =='archive'){
      this.archive[numb - 1].color = color;
    }

  }
  public deteleAllOnDays() {
    let current =this.currentDate.getTime();
    if(current == this.res) this.trashs = [];
  }

  public deleteAll() {
    this.trashs = [];
  }

  public getColorByNum(num: number, page: string) {
    if (page == 'note') {return this.notes[num - 1].color;}
    else if (page == 'flag'){ return this.flag[num - 1].color;}
    else if (page == 'trash'){return this.trashs[num - 1].color;} 
  }
  public getColorByNumArchive (num: number, page: string) {
    if (page == 'archive') {return this.archive[num - 1].color;}


  }
  

  // Swaps notes
  changingNotes(oldNote: Note, newNote: Note) {
    let oldIndex = this.notes.findIndex(elem => elem == oldNote);
    let newIndex = this.notes.findIndex(elem => elem == newNote);
    [this.notes[oldIndex], this.notes[newIndex]] = [this.notes[newIndex], this.notes[oldIndex]]
  }
}
