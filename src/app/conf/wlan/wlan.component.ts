import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { WlanService } from '../wlan.service';
import { WlanList } from '../WlanList';

@Component({
  selector: 'app-wlan',
  templateUrl: './wlan.component.html',
  styleUrls: ['./wlan.component.css']
})
export class WlanComponent implements OnInit, OnDestroy {

  timerSubscription: Subscription | undefined
  listOfWlans: WlanList | undefined

  constructor(private wlanService: WlanService) {}

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.timerSubscription?.unsubscribe();
  }
  
  startScanTimer() {
    const source = timer(0, 2000);
    this.timerSubscription = source.subscribe(val => {
      this.wlanService.getList().subscribe(scanList => 
        {
          this.listOfWlans = scanList
        })
    });
  }
  stopScanTimer() {
    this.timerSubscription?.unsubscribe();
  }

}
