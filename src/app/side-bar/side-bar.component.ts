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

  public faTasks = faTasks;
  public faCheckCircle = faCheckCircle;
  public faCalendarAlt = faCalendarAlt;
  public faBars = faBars;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  public changeFilter(filterName: string) {
    const url: string = this.router.url.split('?')[0];
    const params = {
      filter: filterName
    };

    this.router.navigate([url], { queryParams: params });
  }
}
