import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WlanComponent } from './wlan/wlan.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { ButtonsconfigComponent } from './buttonsconfig/buttonsconfig.component';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card'
import { FormsModule } from '@angular/forms'
import { MatRadioModule } from '@angular/material/radio'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    WlanComponent,
    ButtonsComponent,
    ButtonsconfigComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    MatSlideToggleModule,
    MatCardModule,
    FormsModule,
    MatRadioModule,
    HttpClientModule
  ],
  exports: [
    WlanComponent,
    ButtonsComponent
  ]
})
export class ConfModule {

}
