import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrl: './equipe.component.scss'
})
export class EquipeComponent {

  constructor(private router: Router) { }

  goToMembresBureau() {
    this.router.navigate(['/membres'], { queryParams: { type: 'bur' } });
  }
  goToMembresCommunication() {
    this.router.navigate(['/membres'], { queryParams: { type: 'com' } });
  }
  goToMembresCommercial() {
    this.router.navigate(['/membres'], { queryParams: { type: 'commer' } });
  }
  goToMembresLogistique() {
    this.router.navigate(['/membres'], { queryParams: { type: 'log' } });
  }
}
