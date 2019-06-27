import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {

  present = 'welcome';
  routingCount

  constructor(private router: Router) {
    
  }

  goClock(){
    this.routingCount++;
    this.router.navigateByUrl('/clock');
  }

  startTime(time){
    this.present = time;
  }

  ngOnInit() {
  }

}
