import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TitleSeparatorComponent } from './title-separator/title-separator.component';
import { EquipeComponent } from './equipe/equipe.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { GalerieComponent } from './galerie/galerie.component';
import { MemmbresComponent } from './memmbres/memmbres.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TitleSeparatorComponent,
    EquipeComponent,
    PartenaireComponent,
    GalerieComponent,
    MemmbresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
