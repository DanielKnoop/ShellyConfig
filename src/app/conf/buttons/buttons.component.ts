import { Component, OnInit } from '@angular/core';
import { HomeeService } from '../homee.service';
import { DeviceConfiguration } from '../DeviceConfiguration';
@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor(private homeeService: HomeeService) {}

  deviceConfiguration: DeviceConfiguration | undefined

  ngOnInit(): void {
    this.loadConfig();
  }

  loadConfig() {
    this.homeeService.getConfig().subscribe(config => (this.deviceConfiguration = config))
  }

}
