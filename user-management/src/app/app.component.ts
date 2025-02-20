import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  template: ` <router-outlet>
  </router-outlet>`,
  styles: [''],
  standalone: true,
})
export class AppComponent {}
