import { Component, OnInit } from '@angular/core';
import { CreateNoteService } from 'src/app/services/create-note.service';
@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  constructor(public createNoteService: CreateNoteService) { }

  ngOnInit(): void { }
}
