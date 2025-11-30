import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-utilizacion',
  imports: [RouterLink],
  templateUrl: './utilizacion.html',
  styleUrl: './utilizacion.scss',
})
export class UtilizacionComponent {

  // Código para crear proyecto
  createProjectCode = `ng new mi-app --routing --style=scss`;

  // Código para generar componentes
  generateComponentsCode = `# Componente simple
ng generate component components/header

# Componente con routing
ng generate component pages/home

# Servicio
ng generate service services/data`;

  // Código de servidor de desarrollo
  devServerCode = `ng serve`;

  // Código de build
  buildCode = `ng build
# Archivos en dist/`;

  // Código de puerto personalizado
  customPortCode = `ng serve --port 4300`;

  // Código para abrir navegador
  openBrowserCode = `ng serve --open`;

  // Código de configuración de rutas
  routesCode = `// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' } // Ruta no encontrada
];`;

  // Ejemplo de componente completo
  userCardCode = `// user-card.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() nombre: string = '';
  @Input() rol: string = '';
  
  mostrarInfo() {
    console.log(\`Usuario: \${this.nombre}, Rol: \${this.rol}\`);
  }
}

// user-card.component.html
<div class="card">
  <h3>{{ nombre }}</h3>
  <p>{{ rol }}</p>
  <button (click)="mostrarInfo()">Ver Info</button>
</div>

// Uso en otro componente
<app-user-card 
  [nombre]="'Juan Pérez'" 
  [rol]="'Desarrollador'">
</app-user-card>`;

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
