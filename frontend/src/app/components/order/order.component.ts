import { Component, OnInit } from '@angular/core';
import { Observable, interval, map, shareReplay } from 'rxjs';
import { Time } from './time';
import { OrderCountDownService } from './order-count-down.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{
  public timeLeft$!: Observable<Time>;
  constructor(private count_down_service:OrderCountDownService ) {

  }
  ngOnInit(): void {
    this.timeLeft$ = interval(1000).pipe(
      map(x => this.count_down_service.calcDateDiff()),
      shareReplay(1)
    );
  }



}


