import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTrash, faCheck, faEdit } from '@fortawesome/free-solid-svg-icons';
import { StorageService } from '../storage.service';
import Note from '../models/note.model';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent implements OnInit {

  @Input() note: Note;
  @Output() requestDelete = new EventEmitter<Note>();
  faTrash = faTrash;
  faEdit = faEdit;
  faCheck = faCheck;

  constructor(
    public NoteService: NoteService,
    public storageService: StorageService,
  ) {
    this.note = new Note('', '');
  }

  ngOnInit(): void { }

  completed(): void {
    this.note.completedAt = new Date();
    console.log(this.note);
  }
}