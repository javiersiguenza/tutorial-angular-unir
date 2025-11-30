import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funcionamiento',
  imports: [RouterLink],
  templateUrl: './funcionamiento.html',
  styleUrl: './funcionamiento.scss',
})
export class FuncionamientoComponent {

  componentCode = `// mi-componente.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-mi-componente',    // Cómo se usa: <app-mi-componente>
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.scss']
})
export class MiComponenteComponent {
  // Propiedades
  titulo = 'Mi Título';
  items = ['Item 1', 'Item 2', 'Item 3'];
  
  // Métodos
  agregarItem() {
    this.items.push('Nuevo Item');
  }
}`;

  templateCode = `<div class="container">
  <h1>{{ titulo }}</h1>
  
  <!-- Directivas estructurales -->
  <ul>
    <li *ngFor="let item of items">
      {{ item }}
    </li>
  </ul>
  
  <!-- Event binding -->
  <button (click)="agregarItem()">Agregar</button>
</div>`;

  appComponentCode = `// app.component.ts
import { Component } from '@angular/core';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';

@Component({
  selector: 'app-root',
  imports: [MiComponenteComponent], // Standalone components
  template: '<app-mi-componente></app-mi-componente>'
})
export class AppComponent { }`;

  constructor(private router: Router) {}

  navigateWithScrollTop(route: string): void {
    this.router.navigate([route]).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      // Mostrar mensaje de éxito
      this.showCopySuccess();
    }).catch(err => {
      console.error('Error al copiar: ', err);
      // Fallback para navegadores que no soportan clipboard API
      this.fallbackCopyToClipboard(text);
    });
  }

  private showCopySuccess(): void {
    // Crear elemento temporal para mostrar el mensaje
    const message = document.createElement('div');
    message.textContent = '¡Código copiado!';
    message.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #4CAF50;
      color: white;
      padding: 10px 20px;
      border-radius: 5px;
      z-index: 9999;
      font-weight: bold;
      box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    `;
    document.body.appendChild(message);
    
    // Remover el mensaje después de 2 segundos
    setTimeout(() => {
      document.body.removeChild(message);
    }, 2000);
  }

  private fallbackCopyToClipboard(text: string): void {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      this.showCopySuccess();
    } catch (err) {
      console.error('Fallback: No se pudo copiar el texto', err);
    }
    document.body.removeChild(textArea);
  }
}
