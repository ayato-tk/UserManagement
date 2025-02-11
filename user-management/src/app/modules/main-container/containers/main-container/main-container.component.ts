import { Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

export type Theme = 'light' | 'dark';



@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss'],
  imports: [RouterModule, MatButtonModule],
  standalone: true,
})
export class MainContainerComponent {
  private readonly document = inject(DOCUMENT);

  private readonly currentTheme = signal<Theme>('light');

  toggleTheme() {
    if (this.currentTheme() === 'light') {
      this.setTheme('dark');
      return;
    }
    this.setTheme('light');
  }

  setTheme(theme: Theme) {
    this.currentTheme.set(theme);
    if (theme === 'dark') {
      this.document.documentElement.classList.add('dark-mode');
      return;
    }
    this.document.documentElement.classList.remove('dark-mode');
  }
}
