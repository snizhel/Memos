import { Injectable } from '@angular/core';
import { Note } from '../models/note-model';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private notes: Note[];
  constructor() {
    // Program default notes
    this.notes = [];

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
      color: '#fefefe', todoList: [], showTodo: false, arhieved: false, trash: false,num: this.notes.length+1
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


  public get getNotes():Note[]{
    return this.notes;
  }

  getTrash(){
    return this.notes.filter( note => note.trash);
  }
}
