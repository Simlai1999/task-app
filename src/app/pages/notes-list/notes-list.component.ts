import { Component, OnInit } from '@angular/core';
import Note from 'src/app/models/note.model';
import { NoteService } from 'src/app/services/note.service';
import { Router, Event, NavigationEnd, ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  public notes: Note[] = [];

  constructor(
    public noteService: NoteService,
    public storageService: StorageService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        const filterName = this.route.snapshot.queryParams.filter;
        if (filterName) {
          this.applyFilter(filterName);
        }
      }
    });
  }

  ngOnInit(): void { }

  public onDelete(index: number) {
    this.storageService.removeNote(index);
    const notes = this.storageService.getNotes();
    this.noteService.notes = [];
    notes.forEach(note => {
      this.noteService.notes.push(note);
    })
    console.log(this.noteService.notes);
    
  }

  private applyFilter(filterName: string) {
    this.notes = this.noteService.notes.filter((note: Note) => {
      if (filterName === 'completed') {
        return note.isCompleted();
      }

      if (filterName === 'upcoming') {
        return note.isUpcoming();
      }

      return note;
    });
  }
}
