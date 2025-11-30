import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instalacion',
  imports: [RouterLink],
  templateUrl: './instalacion.html',
  styleUrl: './instalacion.scss',
})
export class InstalacionComponent {

  // Código para verificar Node.js y npm
  nodeVersionCode = `# Verificar instalación
node --version
npm --version`;

  // Código para instalar Angular CLI
  installCliCode = `npm install -g @angular/cli`;

  // Código para verificar Angular CLI
  verifyCliCode = `ng version`;

  // Código para crear nuevo proyecto
  newProjectCode = `ng new mi-proyecto
cd mi-proyecto
ng serve`;

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
