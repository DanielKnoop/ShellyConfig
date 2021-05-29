import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { DeviceConfiguration } from './DeviceConfiguration';

@Injectable({
  providedIn: 'root'
})


export class HomeeService {

  constructor(private http: HttpClient) { }

  configUrl = 'assets/deviceConfiguration.json';
  getConfig() {
    return this.http.get<DeviceConfiguration>(this.configUrl);
  }

  safeConfig(deviceConfig: DeviceConfiguration) {
    this.http.put(this.configUrl, deviceConfig);
  }

}
