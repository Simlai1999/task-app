import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateNoteService } from 'src/app/services/create-note.service';



@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit {

  public title: string = '';
  public body: string = '';

  constructor(
    private createNoteService: CreateNoteService,
    private router: Router
    ) { }

  ngOnInit(): void { }

  submitForm(): void {
    this.createNoteService.saveNote(this.title, this.body);
    this.router.navigate(["/note-list"]);
    
  }
}
