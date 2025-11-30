import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.html',
  styleUrl: './demo.scss'
})
export class DemoComponent {
  title = 'Demostración Práctica de Angular';
  
  constructor() { }
}
