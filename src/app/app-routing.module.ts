import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipeComponent } from './equipe/equipe.component';
import { GalerieComponent } from './galerie/galerie.component';
import { HomeComponent } from './home/home.component';
import { MemmbresComponent } from './memmbres/memmbres.component';
import { PartenaireComponent } from './partenaire/partenaire.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'equipe', component: EquipeComponent },
  { path: 'partenaire', component: PartenaireComponent },
  { path: 'galerie', component: GalerieComponent },
  { path: 'membres', component: MemmbresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
