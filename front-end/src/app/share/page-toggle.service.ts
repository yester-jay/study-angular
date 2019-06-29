import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StopwatchComponent } from '../section/stopwatch/stopwatch.component';
import { StopwatchModule } from '../section/stopwatch/stopwatch.module';

@Injectable()
export class PageToggleService {

  public routingCount = 0;

  constructor(private router: Router) { }

  plusCount(){
    this.routingCount++;
  }

  goPage(target){
    this.routingCount++;
    this.router.navigateByUrl(target);
  }
}
