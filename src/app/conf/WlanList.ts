export interface WlanList {
    wlanList: WlanItem[]
}

export interface WlanItem {
    rssi: Number
    ssid: String
    secure: Number
}