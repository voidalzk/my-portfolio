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
          <span class="brand-copy">Gabriel V.</span>
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
            <span class="icon" [class.icon-sun]="isDark$ | async" [class.icon-moon]="!(isDark$ | async)" aria-hidden="true"></span>
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
          <li><a href="#projetos" (click)="closeMenu()">{{ language.isEnglish() ? 'Projects' : 'Projetos' }}</a></li>
          <li><a href="#experiencia" (click)="closeMenu()">{{ language.isEnglish() ? 'Experience' : 'Experiência' }}</a></li>
          <li><a href="#competencias" (click)="closeMenu()">{{ language.isEnglish() ? 'Skills' : 'Competências' }}</a></li>
          <li><a href="#contato" (click)="closeMenu()">{{ language.isEnglish() ? 'Contact' : 'Contato' }}</a></li>
          <li>
            <a class="resume-link" [href]="language.resumeUrl()" [attr.download]="language.isEnglish() ? 'Gabriel_Voidaleski_CV_EN.pdf' : 'Gabriel_Voidaleski_CV_PT.pdf'" (click)="closeMenu()">
              {{ language.isEnglish() ? 'Resume' : 'Currículo' }} <span class="icon icon-down" aria-hidden="true"></span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  `,
  styles: [`
    .site-header { position: fixed; inset: 0 0 auto; z-index: 1000; border-bottom: 1px solid var(--line); background: var(--nav-bg); }
    .nav { display: flex; min-height: 4.5rem; align-items: center; gap: 1.5rem; }
    .brand { order: 1; text-decoration: none; white-space: nowrap; font-weight: 700; letter-spacing: -.04em; }
    .nav-links { order: 2; display: flex; align-items: center; gap: 1.5rem; padding: 0; margin: 0 0 0 auto; list-style: none; }
    .nav-links a { display: inline-flex; min-height: 44px; align-items: center; font-size: .82rem; color: var(--ink-soft); text-decoration: none; }
    .nav-links a:hover { color: var(--ink); text-decoration: underline; }
    .nav-actions { order: 3; display: flex; gap: .35rem; }
    .language-toggle, .theme-toggle, .menu-toggle { display: grid; width: 44px; height: 44px; place-items: center; border: 1px solid var(--line); border-radius: 4px; background: transparent; color: var(--ink); font-family: var(--mono); font-size: .76rem; }
    .menu-toggle { display: none; position: relative; }
    .menu-toggle span { position: absolute; width: 16px; height: 1px; background: currentColor; }
    .menu-toggle span:first-child { transform: translateY(-3px); }
    .menu-toggle span:last-child { transform: translateY(3px); }
    .menu-toggle[aria-expanded='true'] span:first-child { transform: rotate(45deg); }
    .menu-toggle[aria-expanded='true'] span:last-child { transform: rotate(-45deg); }
    @media(max-width: 800px) {
      .nav { justify-content: space-between; }
      .menu-toggle { display: grid; }
      .nav-links { position: fixed; inset: 4.5rem 0 auto; display: none; padding: .75rem 1rem; background: var(--paper-raised); border-bottom: 1px solid var(--line); }
      .nav-links.open { display: grid; }
      .nav-links a { width: 100%; min-height: 48px; font-size: .95rem; }
    }
  `],
})
export class HeaderComponent {
  private readonly themeService = inject(ThemeService);
  readonly language = inject(LanguageService);
  readonly isDark$ = this.themeService.isDark();
  isMenuOpen = false;
  isScrolled = false;

  @HostListener('window:scroll')
  onScroll(): void { this.isScrolled = window.scrollY > 24; }

  @HostListener('document:keydown.escape')
  onEscape(): void { this.closeMenu(); }

  toggleTheme(): void { this.themeService.toggleTheme(); }
  toggleMenu(): void { this.isMenuOpen = !this.isMenuOpen; }
  closeMenu(): void { this.isMenuOpen = false; }
}
