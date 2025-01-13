import { Component, HostListener, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, AsyncPipe, isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  template: `
    <header class="header" [class.scrolled]="isScrolled">
      <div class="container">
        <nav class="nav">
          <div class="logo">GV</div>
          <div class="nav-controls">
            <button class="theme-toggle" (click)="toggleTheme()" [attr.aria-label]="(isDark$ | async) ? 'Switch to light mode' : 'Switch to dark mode'">
              <i class="theme-icon" [class.dark]="isDark$ | async"></i>
            </button>
            <button class="menu-toggle" (click)="toggleMenu()" [class.active]="isMenuOpen">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
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
      background: var(--header-bg);
      backdrop-filter: blur(12px);
      height: 60px;
      margin: 0.5rem auto;
      border-radius: 12px;
      max-width: calc(100% - 2rem);
      left: 50%;
      transform: translateX(-50%);
    }

    .header.scrolled {
      background: var(--header-bg-scrolled);
      box-shadow: var(--shadow);
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

    .nav-controls {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .theme-toggle {
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      transition: var(--transition);
    }

    .theme-toggle:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    .theme-icon {
      width: 20px;
      height: 20px;
      background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>') no-repeat center;
      transition: transform 0.3s ease;
    }

    .theme-icon.dark {
      background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>') no-repeat center;
      transform: rotate(360deg);
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
  isDark$;

  constructor(
    private themeService: ThemeService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.isDark$ = this.themeService.isDark();
    }
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
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
