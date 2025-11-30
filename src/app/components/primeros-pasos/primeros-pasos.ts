import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-primeros-pasos',
  imports: [RouterLink],
  templateUrl: './primeros-pasos.html',
  styleUrl: './primeros-pasos.scss',
})
export class PrimerosPasosComponent {

  // Código TypeScript del componente
  componentTsCode = `// mi-primer-componente.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-mi-primer-componente',
  templateUrl: './mi-primer-componente.component.html',
  styleUrls: ['./mi-primer-componente.component.scss']
})
export class MiPrimerComponenteComponent {
  nombre = 'Angular';
  contador = 0;
  
  saludar() {
    alert(\`Hola, \${this.nombre}!\`);
  }
  
  incrementar() {
    this.contador++;
  }
  
  decrementar() {
    this.contador--;
  }
}`;

  // Código HTML del template
  templateHtmlCode = `<!-- mi-primer-componente.component.html -->
<div>
  <h1>Mi primer componente</h1>
  <p>Hola, {{ nombre }}!</p>
  <button (click)="saludar()">Saludar</button>
</div>`;

  // Código para ejecutar la aplicación
  serveCode = `ng serve --open`;

  constructor(private router: Router) {}

  navigateWithScrollTop(route: string): void {
    this.router.navigate([route]).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      this.showCopySuccess();
    }).catch(err => {
      console.error('Error al copiar: ', err);
      this.fallbackCopyToClipboard(text);
    });
  }

  private showCopySuccess(): void {
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
