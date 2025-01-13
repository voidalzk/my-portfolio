import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-header',
  template: `
    <header class="header" [class.scrolled]="isScrolled">
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
  styles: [`
    .header {
      position: fixed;
      width: 110%;
      z-index: 1000;
      padding: 1rem 0;
      transition: var(--transition);
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(10px);
      height: 60px;
    }

    .header.scrolled {
      box-shadow: var(--shadow);
    }

    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
    }

    .logo {
      font-size: 1.3rem;
      font-weight: bold;
      color: var(--primary);
    }

    .nav-links {
      display: flex;
      gap: 1.5rem;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .nav-links a {
      text-decoration: none;
      color: var(--text);
      font-weight: 500;
      font-size: 0.9rem;
      transition: color 0.3s ease;
      cursor: pointer;
    }

    .nav-links a:hover {
      color: var(--secondary);
    }

    @media (max-width: 768px) {
      .nav-links {
        display: none;
      }
    }
  `]
})
export class HeaderComponent {
  isScrolled = false;

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  downloadCurriculo() {
    const link = document.createElement('a');
    link.href = 'assets/curriculo.pdf';
    link.download = 'Gabriel_Voidaleski_Curriculo.pdf';
    link.click();
  }
}
