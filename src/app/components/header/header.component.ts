import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header">
      <div class="container">
        <nav class="nav">
          <div class="logo">GV</div>
          <ul class="nav-links">
            <li><a href="#about">Sobre</a></li>
            <li><a href="#skills">Habilidades</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a (click)="downloadCurriculo()">Currículo</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `,
  styles: [
    `
      .header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: rgba(255, 255, 255, 0.95);
        box-shadow: var(--shadow);
        z-index: 1000;
      }

      .nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0;
      }

      .logo {
        font-size: 1.5rem;
        font-weight: bold;
        color: var(--primary);
      }

      .nav-links {
        display: flex;
        gap: 2rem;
        list-style: none;
      }

      .nav-links a {
        text-decoration: none;
        color: var(--text);
        font-weight: 500;
        transition: color 0.3s ease;
      }

      .nav-links a:hover {
        color: var(--secondary);
      }

      .btn-download {
        background: var(--secondary);
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        cursor: pointer;
        transition: background 0.3s ease;
      }

      .btn-download:hover {
        background: #2a6ebb; /* Ajuste conforme a cor desejada */
      }

      @media (max-width: 768px) {
        .nav-links {
          display: none;
        }
      }
    `,
  ],
})
export class HeaderComponent {
  downloadCurriculo() {
    const link = document.createElement('a');
    link.href = 'assets/curriculo.pdf';
    link.download = 'Gabriel_Voidaleski_Curriculo.pdf';
    link.click();
  }
}
