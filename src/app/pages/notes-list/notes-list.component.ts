import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/noteServices/services';
import { NoteService } from 'src/app/services/note.service';
@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  public notes: Note[] = [];

  constructor(public NoteService: NoteService, private noteService: NoteService) { }

  ngOnInit(): void { 
    this.notes = this.noteService.notes;
  }

    private applyFilter(filterName: string) {
    this.notes = this.noteService.notes.filter(note => {
      if (filterName === 'completed') {
        return note.completedAt != null;  
      }
      return note
    });
  }
}
