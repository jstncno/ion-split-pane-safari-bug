import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NestedPageRoutingModule } from './nested-routing.module';

import { NestedPage } from './nested.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NestedPageRoutingModule
  ],
  declarations: [NestedPage]
})
export class NestedPageModule {}
