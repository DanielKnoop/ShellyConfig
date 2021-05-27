import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { WlanComponent } from './conf/wlan/wlan.component';
import { ConfModule } from './conf/conf.module';
import { ButtonsComponent } from './conf/buttons/buttons.component';
import { ButtonsconfigComponent } from './conf/buttonsconfig/buttonsconfig.component';
import { DebugComponent } from './conf/debug/debug.component';

const routes: Routes = [
  { path: 'wlan', component: WlanComponent },
  { path: 'device', component: ButtonsComponent },
  { path: 'debug', component: DebugComponent },
]

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
