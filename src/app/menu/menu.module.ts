import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintoolbarComponent } from './maintoolbar/maintoolbar.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu'
@NgModule({
  declarations: [
    MaintoolbarComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [
    MaintoolbarComponent
  ]
})
export class MenuModule { }
