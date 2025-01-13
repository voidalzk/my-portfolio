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
          <button class="menu-toggle" (click)="toggleMenu()" [class.active]="isMenuOpen">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul class="nav-links" [class.active]="isMenuOpen">
            <li><a href="#about" (click)="closeMenu()">Sobre</a></li>
            <li><a href="#skills" (click)="closeMenu()">Habilidades</a></li>
            <li><a href="#projects" (click)="closeMenu()">Projetos</a></li>
            <li><a (click)="downloadCurriculo(); closeMenu()">Currículo</a></li>
            <li><a href="#contact" (click)="closeMenu()">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    .header {
      position: fixed;
      width: 100%;
      z-index: 1000;
      padding: 0.8rem;
      transition: var(--transition);
      background: rgba(44, 62, 80, 0.7);
      backdrop-filter: blur(12px);
      height: 60px;
      margin: 0.5rem auto;
      border-radius: 12px;
      max-width: calc(100% - 2rem);
      left: 50%;
      transform: translateX(-50%);
    }

    .header.scrolled {
      background: rgba(44, 62, 80, 0.85);
      box-shadow: 0 8px 32px 0 rgba(44, 62, 80, 0.2);
    }

    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      max-width: 100%;
      padding: 0 1rem;
    }

    .logo {
      font-size: 1.3rem;
      font-weight: bold;
      color: #fff;
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
      color: rgba(255, 255, 255, 0.85);
      font-weight: 500;
      font-size: 0.9rem;
      transition: var(--transition);
      cursor: pointer;
    }

    .nav-links a:hover {
      color: #fff;
      text-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
    }

    .menu-toggle {
      display: none;
      flex-direction: column;
      justify-content: space-between;
      width: 30px;
      height: 21px;
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 0;
      z-index: 10;
    }

    .menu-toggle span {
      width: 100%;
      height: 2px;
      background-color: #fff;
      transition: var(--transition);
      border-radius: 4px;
    }

    @media (max-width: 768px) {
      .header {
        max-width: calc(100% - 1rem);
        margin: 0.25rem auto;
      }

      .menu-toggle {
        display: flex;
      }

      .nav-links {
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 0;
        right: -100%;
        width: 70%;
        height: 100vh;
        background: rgba(44, 62, 80, 0.98);
        padding: 80px 40px;
        transition: var(--transition);
        align-items: center;
        gap: 2rem;
      }

      .nav-links.active {
        right: 0;
        box-shadow: -5px 0 15px rgba(44, 62, 80, 0.3);
      }

      .nav-links a {
        font-size: 1.1rem;
        color: rgba(255, 255, 255, 0.85);
      }

      .nav-links a:hover {
        color: #fff;
      }
    }
  `]
})
export class HeaderComponent {
  isScrolled = false;
  isMenuOpen = false;

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
  }

  downloadCurriculo() {
    const link = document.createElement('a');
    link.href = 'assets/curriculo.pdf';
    link.download = 'Gabriel_Voidaleski_Curriculo.pdf';
    link.click();
  }
}
