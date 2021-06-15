import { Component, OnInit } from '@angular/core';
import { faBars, faTasks } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt, faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { Router } from '@angular/router';

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
  

  constructor(private router: Router) { }

  ngOnInit(): void { }

  public changeFilter(filterName: string) {
    console.log(filterName);
    const url = this.router.url.split('?')[0];
    const params = {
      filter: filterName
    };

    this.router.navigate([url], { queryParams: params });
  }
}