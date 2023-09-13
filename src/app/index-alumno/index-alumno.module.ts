import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexAlumnoPageRoutingModule } from './index-alumno-routing.module';

import { IndexAlumnoPage } from './index-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexAlumnoPageRoutingModule
  ],
  declarations: [IndexAlumnoPage]
})
export class IndexAlumnoPageModule {}
