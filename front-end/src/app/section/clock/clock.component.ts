import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { PageToggleService } from 'src/app/share/page-toggle.service';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  timeString

  constructor(private router: Router, private pageRoggleService: PageToggleService) {
    
    // setInterval(()=>{
      
    // }, 1000)

    interval(1000)
      .pipe(map(()=>{
        return moment().format('YYYY-MM-DD HH:mm:ss')
      }))
      .subscribe(data => {
        this.timeString = data;
      })

  }

  goStopwatch(){
    this.pageRoggleService.goPage('/stopwatch');
    
    // this.router.navigateByUrl('/stopwatch');
  }

  // getCurrentTime(){
  //   let result = moment().format('YYYY-MM-DD HH:mm:ss')
  //   return result;
  // }

  ngOnInit() {
  }

}
