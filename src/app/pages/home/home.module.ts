import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BannerComponent } from '@components/home/banner/banner.component';
import { CellphoneBannerComponent } from '@components/home/cellphone-banner/cellphone-banner.component';
import { PlanBannerComponent } from '@components/home/plan-banner/plan-banner.component';

import { HomePageRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home.component';


@NgModule({
  imports: [
    HomePageRoutingModule,
    CommonModule
  ],
  declarations: [
    HomePageComponent, 
    BannerComponent,
    PlanBannerComponent,
    CellphoneBannerComponent
  ],
  providers: []
})
export class HomePageModule { }
