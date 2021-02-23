import { Injectable } from '@angular/core';
import { Note } from '../models/note-model';
import * as uuid from 'uuid';
import { NumberValueAccessor } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private notes: Note[];
  private trashs: Note[];
  private archive: Note[];
  private flag:Note[];
  constructor() {
    // Program default notes
    this.notes = [this.getDefaultNote()];
    this.trashs = [];
    this.archive = [];
    this.flag = [this.getDefaultNote()];
    // this.flag=[];
  }

  // Example note
  getDefaultNote(): Note {
    return {
      id: uuid.v4(), title: 'firsttitle', description: 'firstdescription', pin: false,
      labels: [], selectedColor: 0, color: '#fefefe', todoList: [],
      showTodo: false, arhieved: false, trash: false
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

  addFlagToNote(numb:number){
    this.notes.push(this.flag[numb-1]);
    this.flag.splice(numb - 1, 1);
  }

  addNoteToFlag(numb:number){
    this.flag.push(this.notes[numb - 1]);
    this.notes.splice(numb - 1, 1);
    // console.log(this.flag);
  }

  addFlagToArchive(numb:number){
    this.archive.push(this.flag[numb - 1]);
    this.flag.splice(numb - 1, 1);
  }

  addFlagToTrash(numb:number){
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
  public get getFlag():Note[]{
    return this.flag;
  }
  public get getNotes(): Note[] {
    return this.notes;
  }

  public get getArchive(): Note[] {
    return this.archive;
  }

  // getTrash(){
  //   return this.notes.filter( note => note.trash);
  // }
  public get getTrash(): Note[] {
    return this.trashs;
  }
}
