import { Injectable } from '@angular/core';
import Note from './models/note.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  
  public saveNote(notes: Note[]) {
    const notesData = notes.map(note => {
      return {
        title: note.title,
        body: note.body,
        createdAt: note.createdAt,
        completedAt: note.completedAt,
        deletedAt: note.deletedAt
      }
    });
    window.localStorage.setItem('SAVED_NOTES', JSON.stringify(notesData));
  }

  public getNotes(): any[] {
    const savedNotes = window.localStorage.getItem('SAVED_NOTES');
    return savedNotes == null ? [] : JSON.parse(savedNotes);
  }

  public removeNote(index: number) {
    const notes = this.getNotes();
    notes.splice(index, 1);
    window.localStorage.setItem('SAVED_NOTES', JSON.stringify(notes));
  }
}