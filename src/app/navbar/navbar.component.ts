import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  openNav: boolean = true;
  openPartenaire: boolean = true;

  constructor(private router: Router) { }

  goToPartenaireEntreprise() {
    this.router.navigate(['/partenaire'], { queryParams: { type: 'entreprise' } });
  }
  goToPartenaireEcole() {
    this.router.navigate(['/partenaire'], { queryParams: { type: 'ecole' } });
  }
  goToPartenairePresse() {
    this.router.navigate(['/partenaire'], { queryParams: { type: 'presse' } });
  }

  toggleNav() {
    this.openNav = !this.openNav;
  }
  togglePartenaire() {
    this.openPartenaire = !this.openPartenaire;
  }

}
