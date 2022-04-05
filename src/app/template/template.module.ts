import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { BasicComponent } from './basic/basic.component';
import { DinamicsComponent } from './dinamics/dinamics.component';
import { SwitchesComponent } from './switches/switches.component';


@NgModule({
  declarations: [
    BasicComponent,
    DinamicsComponent,
    SwitchesComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule
  ]
})
export class TemplateModule { }