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
    const savedNote: Note = this.noteService.saveNote(this.title, this.body);

    if (savedNote.isActive()) {
      this.router.navigate(['/note-list']);
    }
    
    this.storageService.saveNote(this.noteService.notes);
    
    
    // TODO: some error handling here
  }
}
