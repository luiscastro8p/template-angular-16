import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './perfil/perfil';
import { ContactoComponent } from './contacto/contacto';
import { HomeComponent } from './home/home';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'contacto', component: ContactoComponent },
];

@NgModule({
  declarations: [PerfilComponent, HomeComponent, ContactoComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ComponentsModule],
  providers: [],
  exports: [RouterModule],
})
export class ViewsModule {}
