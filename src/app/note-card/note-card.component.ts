import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';
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
  
  constructor(public NoteService: NoteService, private router: Router) { 
    this.note = new Note('', '');
  }

  ngOnInit(): void { }

  completed(): void {
    this.note.completedAt = new Date();
    console.log(this.note);
    
  }
}