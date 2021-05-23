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
  buttonType: string = "push";
  buttonTypes: string[] = ["push","toggle"]
}
