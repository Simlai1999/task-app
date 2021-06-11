import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  
  constructor(public NoteService: NoteService) { 
    this.note = new Note('', '');
  }

  ngOnInit(): void { }
}
