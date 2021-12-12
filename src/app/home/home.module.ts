import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavTopComponent } from './nav-top/nav-top.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [NavTopComponent, FooterComponent],
  imports: [CommonModule, FormsModule],
  exports: [NavTopComponent],
})
export class HomeModule {}
