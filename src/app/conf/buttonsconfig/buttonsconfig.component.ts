import { Component, Inject, OnInit, Input } from '@angular/core';
import { InputType } from '../DeviceConfiguration';
@Component({
  selector: 'app-buttonsconfig',
  templateUrl: './buttonsconfig.component.html',
  styleUrls: ['./buttonsconfig.component.css']
})

export class ButtonsconfigComponent implements OnInit {

  constructor() {
    
  }

  ngOnInit(): void {
    
  }

  @Input() inputType: InputType = new InputType();
  buttonTypes = new Map([[0, 'Taster'], [1, 'Schalter']]);
}
