
export interface DeviceConfiguration {
    inputType: InputType[];
}

export class InputType {
    id: number = 0
    type: number = 0
    enabled: boolean = false
    doubleClickEnabled: boolean = false
    longClickEnabled: boolean = false
    gpio: number = 0
}