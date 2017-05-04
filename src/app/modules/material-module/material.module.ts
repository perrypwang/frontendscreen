import {
  MdButtonModule, MdCheckboxModule, MdGridList, MdGridListModule, MdIconModule,
  MdMenuModule
} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    MdButtonModule,
    MdCheckboxModule,
    MdGridListModule,
    MdIconModule,
    MdMenuModule
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdGridListModule,
    MdIconModule,
    MdMenuModule,
  ]
})

export class MaterialModule { }
