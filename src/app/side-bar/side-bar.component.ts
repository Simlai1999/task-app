import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faList } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt, faCheckCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  faList = faList;
  faCheckCircle = faCheckCircle;
  faCalendarAlt = faCalendarAlt;
  faChevronLeft = faChevronLeft;

  constructor() { }

  ngOnInit(): void {
  }

}
