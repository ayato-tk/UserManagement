import { DOCUMENT } from '@angular/common';
import { Inject, inject, Injectable, signal } from '@angular/core';
import { Theme } from '../../enums';
import { AppStoragePrefixToken } from '@user-management/data-access';

@Injectable({
  providedIn: 'root',
})
export class ThemeModeService {
  private readonly document = inject(DOCUMENT);

  private readonly currentTheme = signal<Theme>(Theme.Light);

  constructor(@Inject(AppStoragePrefixToken) private storagePrefix: string, ) {
    const val = this.getThemeStorage();
    this.setTheme(val);
  }

  toggleTheme() {
    const newTheme =
      this.currentTheme() === Theme.Light ? Theme.Dark : Theme.Light;
    this.setTheme(newTheme);
    this.saveThemeStorage(newTheme);
  }

  setTheme(theme: Theme) {
    this.currentTheme.set(theme);
    if (theme === Theme.Dark) {
      this.document.documentElement.classList.add('dark-mode');
      return;
    }
    this.document.documentElement.classList.remove('dark-mode');
  }

  private saveThemeStorage(theme: Theme) {
    localStorage.setItem(`${this.storagePrefix}.theme`, theme.toString());
  }

  private getThemeStorage(): Theme {
    const storedValue = localStorage.getItem(`${this.storagePrefix}.theme`);
    return storedValue !== null ? (parseInt(storedValue) as Theme) : Theme.Light;
  }
}
