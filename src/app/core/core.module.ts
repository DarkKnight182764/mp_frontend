import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button'; 
import { NgModule, Optional, SkipSelf } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [    
    CommonModule,
    MatButtonModule
  ]
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {        
    }
 }
