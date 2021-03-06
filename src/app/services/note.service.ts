import { Injectable } from '@angular/core';
import { StorageService } from '../storage.service';
import Note from '../models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  public notes: Note[] = [];

  constructor(private storageService: StorageService) {
    const savedNoteItems: any[] | string = this.storageService.getNotes() ?? [];

    if (Array.isArray(savedNoteItems)) {
      this.notes = savedNoteItems.map(item => new Note(item.title, item.body));
    }  
   }

  public saveNote(title: string, body: string): Note {

    const notes = this.storageService.getNotes();
    this.notes = [];
    notes.forEach(note => {
      this.notes.push(new Note(note.title, note.body))
    });

    return this.notes[this.notes.length - 1];
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

