import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/storage.service';
import Note from 'src/app/models/note.model';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit {

  public title: string = '';
  public body: string = '';

  constructor(
    private noteService: NoteService,
    private router: Router,
    private storageService: StorageService
  ) { }

  ngOnInit(): void { }

  submitForm(): void {
    const notes: Note[] = this.storageService.getNotes();
    notes.push(new Note(this.title, this.body));
    this.storageService.saveNote(notes);
    const savedNote: Note = this.noteService.saveNote(this.title, this.body);
    console.log(savedNote);
    
    this.router.navigate(['/note-list']);
    
    
    
    // TODO: some error handling here
  }
}
