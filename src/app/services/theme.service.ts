import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkMode = new BehaviorSubject<boolean>(false);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        this.darkMode.next(savedTheme === 'dark');
      } else {
        const prefersDark = window.matchMedia(
          '(prefers-color-scheme: dark)'
        ).matches;
        this.darkMode.next(prefersDark);
      }
      this.updateThemeClass(this.darkMode.value);
    }
  }

  private getInitialTheme(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      // Primeiro verifica o tema salvo no localStorage
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }

      // Se não houver tema salvo, verifique a preferência do sistema
      // Se quisermos forçar o tema claro inicialmente, podemos retornar false aqui
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    // Sempre retorne falso (tema claro) para renderização no servidor
    return false;
  }

  private updateThemeClass(isDark: boolean) {
    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.classList.toggle('dark-theme', isDark);
    }
  }

  isDark(): Observable<boolean> {
    return this.darkMode.asObservable();
  }

  toggleTheme() {
    if (isPlatformBrowser(this.platformId)) {
      const newValue = !this.darkMode.value;
      localStorage.setItem('theme', newValue ? 'dark' : 'light');
      this.darkMode.next(newValue);
      this.updateThemeClass(newValue);
    }
  }
}
