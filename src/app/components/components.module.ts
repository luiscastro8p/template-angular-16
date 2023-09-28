import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TitleComponent } from './title/title';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [TitleComponent],
  exports: [TitleComponent],
  providers: [TitleComponent],
})
export class ComponentsModule {}
