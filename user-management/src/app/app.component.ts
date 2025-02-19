import { provideHttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  template: ` <router-outlet></router-outlet>`,
  styles: [''],
  standalone: true,
})
export class AppComponent {}
