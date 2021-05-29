import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeeService } from '../homee.service';
import { DeviceConfiguration } from '../DeviceConfiguration';
import { EventsService } from 'src/app/menu/events.service';
@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent implements OnInit, OnDestroy {

  constructor(private homeeService: HomeeService, private menuEventService: EventsService) {}

  deviceConfiguration: DeviceConfiguration | undefined
  saveButtonSubscribtion: Subscription | undefined

  ngOnDestroy():void {
    this.saveButtonSubscribtion?.unsubscribe();
  }

  ngOnInit(): void {
    this.loadConfig();

    this.saveButtonSubscribtion = this.menuEventService.saveClickEvent.subscribe(() => {
      if(this.deviceConfiguration !== undefined)
        this.homeeService.safeConfig(this.deviceConfiguration!);
    })
  }

  loadConfig() {
    this.homeeService.getConfig().subscribe(config => {
      this.deviceConfiguration = config
    })
  }

}
