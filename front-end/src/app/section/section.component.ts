import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  present = 'welcome';
  
  constructor() { }

  startTime(time){
    this.present = time;
  }

  ngOnInit() {
  }

}
