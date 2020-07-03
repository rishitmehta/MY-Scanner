import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PdfPagePageRoutingModule } from './pdf-page-routing.module';

import { PdfPagePage } from './pdf-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdfPagePageRoutingModule
  ],
  declarations: [PdfPagePage]
})
export class PdfPagePageModule {}
