import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-justificacion',
  imports: [RouterLink],
  templateUrl: './justificacion.html',
  styleUrl: './justificacion.scss',
})
export class JustificacionComponent {

  constructor(private router: Router) {}

  navigateWithScrollTop(route: string): void {
    this.router.navigate([route]).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
