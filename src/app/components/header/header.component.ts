import { AsyncPipe } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <header class="site-header" [class.scrolled]="isScrolled">
      <nav class="container nav" [attr.aria-label]="language.isEnglish() ? 'Main navigation' : 'Navegação principal'">
        <a class="brand" href="#inicio" [attr.aria-label]="language.isEnglish() ? 'Gabriel Voidaleski — home' : 'Gabriel Voidaleski — início'">
          <span class="brand-mark" aria-hidden="true">GV</span>
          <span class="brand-copy">Gabriel<br />Voidaleski</span>
        </a>

        <div class="nav-actions">
          <button
            class="language-toggle"
            type="button"
            (click)="language.toggle()"
            [attr.aria-label]="language.isEnglish() ? 'Mudar idioma para português' : 'Switch language to English'"
            [attr.title]="language.isEnglish() ? 'Português' : 'English'"
          >{{ language.isEnglish() ? 'PT' : 'EN' }}</button>
          <button
            class="theme-toggle"
            type="button"
            (click)="toggleTheme()"
            [attr.aria-label]="(isDark$ | async) ? (language.isEnglish() ? 'Activate light theme' : 'Ativar tema claro') : (language.isEnglish() ? 'Activate dark theme' : 'Ativar tema escuro')"
          >
            <span aria-hidden="true">{{ (isDark$ | async) ? '☼' : '◐' }}</span>
          </button>
          <button
            class="menu-toggle"
            type="button"
            (click)="toggleMenu()"
            [attr.aria-expanded]="isMenuOpen"
            aria-controls="menu-principal"
            [attr.aria-label]="isMenuOpen ? (language.isEnglish() ? 'Close menu' : 'Fechar menu') : (language.isEnglish() ? 'Open menu' : 'Abrir menu')"
          >
            <span></span><span></span>
          </button>
        </div>

        <ul id="menu-principal" class="nav-links" [class.open]="isMenuOpen">
          <li><a href="#sobre" (click)="closeMenu()">{{ language.isEnglish() ? 'About' : 'Sobre' }}</a></li>
          <li><a href="#experiencia" (click)="closeMenu()">{{ language.isEnglish() ? 'Experience' : 'Experiência' }}</a></li>
          <li><a href="#competencias" (click)="closeMenu()">{{ language.isEnglish() ? 'Skills' : 'Competências' }}</a></li>
          <li><a href="#projetos" (click)="closeMenu()">{{ language.isEnglish() ? 'Projects' : 'Projetos' }}</a></li>
          <li><a href="#contato" (click)="closeMenu()">{{ language.isEnglish() ? 'Contact' : 'Contato' }}</a></li>
          <li>
            <a class="resume-link" [href]="language.resumeUrl()" [attr.download]="language.isEnglish() ? 'Gabriel_Voidaleski_CV_EN.pdf' : 'Gabriel_Voidaleski_CV_PT.pdf'" (click)="closeMenu()">
              {{ language.isEnglish() ? 'Resume' : 'Currículo' }} <span aria-hidden="true">↓</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  `,
  styles: [`
    .site-header {
      position: fixed;
      inset: 0 0 auto;
      z-index: 1000;
      border-bottom: 1px solid transparent;
      background: transparent;
      transition: background 180ms ease, border-color 180ms ease;
    }

    .site-header.scrolled {
      border-color: var(--line);
      background: var(--nav-bg);
      backdrop-filter: blur(18px);
    }

    .nav {
      display: flex;
      min-height: 5rem;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
    }

    .brand {
      order: 1;
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      text-decoration: none;
    }

    .brand-mark {
      display: grid;
      width: 2.45rem;
      height: 2.45rem;
      place-items: center;
      border-radius: 50%;
      background: var(--ink);
      color: var(--paper);
      font-family: var(--mono);
      font-size: 0.76rem;
      font-weight: 800;
      letter-spacing: -0.05em;
    }

    .brand-copy {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      line-height: 1.05;
      text-transform: uppercase;
    }

    .nav-links {
      order: 2;
      display: flex;
      align-items: center;
      gap: clamp(1rem, 2vw, 1.65rem);
      padding: 0;
      margin: 0 0 0 auto;
      list-style: none;
    }

    .nav-links a {
      color: var(--ink-soft);
      font-size: 0.84rem;
      font-weight: 700;
      text-decoration: none;
    }

    .nav-links a:hover {
      color: var(--signal-deep);
    }

    .nav-links .resume-link {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      padding: 0.55rem 0.9rem;
      border: 1px solid var(--line);
      border-radius: 999px;
      color: var(--ink);
    }

    .nav-actions {
      order: 3;
      display: flex;
      align-items: center;
      gap: 0.45rem;
    }

    .theme-toggle,
    .language-toggle,
    .menu-toggle {
      display: grid;
      width: 2.75rem;
      height: 2.75rem;
      place-items: center;
      border: 1px solid var(--line);
      border-radius: 50%;
      background: var(--paper-raised);
      color: var(--ink);
      cursor: pointer;
    }

    .language-toggle {
      font-family: var(--mono);
      font-size: 0.72rem;
      font-weight: 800;
      letter-spacing: 0.04em;
    }

    .language-toggle:hover,
    .theme-toggle:hover { border-color: var(--signal-deep); color: var(--signal-deep); }

    .menu-toggle {
      position: relative;
      display: none;
    }

    .menu-toggle span {
      position: absolute;
      width: 1rem;
      height: 1px;
      background: currentColor;
      transition: transform 180ms ease;
    }

    .menu-toggle span:first-child { transform: translateY(-3px); }
    .menu-toggle span:last-child { transform: translateY(3px); }
    .menu-toggle[aria-expanded='true'] span:first-child { transform: rotate(45deg); }
    .menu-toggle[aria-expanded='true'] span:last-child { transform: rotate(-45deg); }

    @media (max-width: 900px) {
      .menu-toggle { display: grid; }

      .nav-links {
        position: fixed;
        inset: 5rem 1rem auto;
        display: grid;
        gap: 0;
        padding: 1rem;
        border: 1px solid var(--line);
        border-radius: 1.25rem;
        background: var(--paper-raised);
        box-shadow: var(--shadow);
        opacity: 0;
        pointer-events: none;
        transform: translateY(-0.75rem);
        transition: opacity 160ms ease, transform 160ms ease;
      }

      .nav-links.open {
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0);
      }

      .nav-links a {
        display: flex;
        min-height: 3.25rem;
        align-items: center;
        padding: 0 0.75rem;
        border-bottom: 1px solid var(--line);
        font-size: 1rem;
      }

      .nav-links li:last-child a { border-bottom: 0; }
      .nav-links .resume-link { border: 0; border-radius: 0; }
    }
  `],
})
export class HeaderComponent {
  private readonly themeService = inject(ThemeService);
  readonly language = inject(LanguageService);
  readonly isDark$ = this.themeService.isDark();
  isScrolled = false;
  isMenuOpen = false;

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 24;
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
