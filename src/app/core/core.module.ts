import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
    RouterModule,
    HeaderComponent,
    FooterComponent
  ],
  declarations: [HeaderComponent, NotFoundComponent, FooterComponent]
})
export class CoreModule { }
