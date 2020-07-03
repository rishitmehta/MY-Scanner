import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamerPagePageRoutingModule } from './camer-page-routing.module';

import { CamerPagePage } from './camer-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamerPagePageRoutingModule
  ],
  declarations: [CamerPagePage]
})
export class CamerPagePageModule {}
