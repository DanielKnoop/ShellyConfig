import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    MainmenuComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule
  ],
  exports: [
    MainmenuComponent
  ]
})
export class MenuModule { }
