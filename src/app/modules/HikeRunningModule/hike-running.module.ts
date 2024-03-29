import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HikeRunningPage } from './hike-running.page';
import {MapApiService} from '../../services/MapAPIService/map-api.service';
import {HttpClientModule} from '@angular/common/http';
import {HikeStateService} from '../../services/HikeStateService/hike-state.service';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HikeRunningPage,
      }
    ])
  ],
  providers: [
      MapApiService,
      HikeStateService
  ],
  declarations: [HikeRunningPage]
})
export class HikeRunningPageModule {}
