import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
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
}
