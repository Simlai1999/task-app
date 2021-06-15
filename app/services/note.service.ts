import { Injectable } from '@angular/core';
import Note from '../models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  public notes: Note[] = [];

  constructor() { }

  public saveNote(title: string, body: string): Note {
    const note: Note = new Note(title, body);

    this.notes.push(note);

    return note;
  }

  public deleteTask(index: number): boolean {
    const originalItemCount: number = this.notes.length;
    this.notes.splice(index, 1);
    const newItemCount: number = this.notes.length;

    return originalItemCount !== newItemCount;
  }

  public update(index: number, title: string, body: string) {
    let note = this.notes[index];
    note.title = title;
    note.body = body;
  }
}

