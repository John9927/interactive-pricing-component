import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  min = 0;
  max = 32;
  pageNumber;
  value = 16;
  range: any;
  checkbox: any;
  monthAndYear: any = "/ month";
  constructor() { }

  ngOnInit() {
    this.pageNumber = "100";
    this.checkbox = document.querySelector('#checkbox');
    this.range = document.getElementById('rangeSlide');
  }

  onClick() {
    if (this.checkbox.checked) {
      this.max = 64;
      this.value = 32;
      this.range.innerText = this.value;
    }
    else {
      this.max = 32;
      this.value = 16;
      this.range.innerText = this.value;
    }
  }
}



