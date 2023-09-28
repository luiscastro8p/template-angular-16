import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { LayoutModule } from '../layout/layout.module';
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes), LayoutModule],
  exports: [RouterModule],
  providers: [],
})
export class RoutesModule {}
