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
  constructor() {
    // Program default notes
    this.notes = [];
    this.trashs = [];
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


  checkByNumb(numb: Number) {
    // numb = parseInt(numb);
    console.log(numb);
    for (let i = 0; i < this.notes.length; i++) {
      if (this.notes[i].num == numb) {

        console.log(this.trashs);
      }

    }


  }

  addToTrash(numb: number) {

    this.trashs.push(this.notes[numb - 1]);
    this.notes.splice(numb - 1, 1);

    console.log(this.trashs);
  }


  public get getNotes(): Note[] {
    return this.notes;
  }

  // getTrash(){
  //   return this.notes.filter( note => note.trash);
  // }
  public get getTrash(): Note[] {
    return this.trashs;
  }
}
