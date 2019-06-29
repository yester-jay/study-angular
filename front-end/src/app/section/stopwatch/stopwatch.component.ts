import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageToggleService } from 'src/app/share/page-toggle.service';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {

  present = 'welcome';
  routingCount

  constructor(private router: Router, private pageRoggleService: PageToggleService) {
    
  }

  goClock(){
    this.pageRoggleService.goPage('/click');
  }

  startTime(time){
    this.present = time;
  }

  ngOnInit() {
  }

}
