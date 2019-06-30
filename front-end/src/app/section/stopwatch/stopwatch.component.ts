import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageToggleService } from 'src/app/share/page-toggle.service';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss'],
  // providers: [PageToggleService]
})
export class StopwatchComponent implements OnInit {

  present = 'welcome';
  routingCount

  constructor(private router: Router, public pageToggleService: PageToggleService) {
    
  }

  goClock(){
    this.pageToggleService.goPage('/clock');
  }

  startTime(time){
    this.present = time;
  }

  ngOnInit() {
  }

  ngAfterContentInit(){
    console.log('ng after content init')
  }
  ngAfterContentChecked(){
    console.log('ng after content checked')
  }
  ngAfterViewInit(){
    console.log('ng after view init')
  }
  ngAfterViewChecked(){
    console.log('ng after view checked')
  }

}
