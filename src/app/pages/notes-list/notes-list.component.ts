import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  constructor(public NoteService: NoteService) { }

  ngOnInit(): void { }
}
