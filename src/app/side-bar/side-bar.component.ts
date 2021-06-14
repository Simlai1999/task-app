import { Component, OnInit } from '@angular/core';
import { faBars, faTasks } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt, faCheckCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  faTasks = faTasks;
  faCheckCircle = faCheckCircle;
  faCalendarAlt = faCalendarAlt;
  faBars = faBars;

  constructor() { }

  ngOnInit(): void {
  }

}
