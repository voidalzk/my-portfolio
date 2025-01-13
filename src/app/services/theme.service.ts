import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode = new BehaviorSubject<boolean>(false);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const initialTheme = this.getInitialTheme();
      this.darkMode.next(initialTheme);
      this.updateThemeClass(initialTheme);
    }
  }

  private getInitialTheme(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  }

  private updateThemeClass(isDark: boolean) {
    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.classList.toggle('dark-theme', isDark);
    }
  }

  isDark() {
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
