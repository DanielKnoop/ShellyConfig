import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WlanList } from './WlanList';

@Injectable({
  providedIn: 'root'
})
export class WlanService {

  constructor(private http: HttpClient) { }

  wlanUrl = "http://192.168.199.41/scan"

  getList() {
    return this.http.get<WlanList>(this.wlanUrl);
  }

}
