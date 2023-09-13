import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexProfesorPageRoutingModule } from './index-profesor-routing.module';

import { IndexProfesorPage } from './index-profesor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexProfesorPageRoutingModule
  ],
  declarations: [IndexProfesorPage]
})
export class IndexProfesorPageModule {}
