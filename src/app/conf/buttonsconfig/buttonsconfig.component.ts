import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttonsconfig',
  templateUrl: './buttonsconfig.component.html',
  styleUrls: ['./buttonsconfig.component.css']
})
export class ButtonsconfigComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  enable: boolean = false
  buttonType: Number = 1;
  buttonTypes = new Map([[1, 'Taster'], [2, 'Schalter']]);
}
