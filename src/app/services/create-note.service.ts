import { Injectable } from '@angular/core';
import Note from '../models/note.model';

@Injectable({
  providedIn: 'root'
})
export class CreateNoteService {
  
  public notes: Note[] = [];

  constructor() { }

  public saveNote = (title: string, body: string) => {
    this.notes.push(new Note(title, body));
  }
}

