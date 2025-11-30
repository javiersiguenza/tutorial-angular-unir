import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conclusiones',
  imports: [RouterLink],
  templateUrl: './conclusiones.html',
  styleUrl: './conclusiones.scss',
})
export class ConclusionesComponent {

  constructor(private router: Router) {}

  navigateWithScrollTop(route: string): void {
    this.router.navigate([route]).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
