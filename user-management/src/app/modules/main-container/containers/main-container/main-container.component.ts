import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ThemeModeService } from 'src/app/shared';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss'],
  imports: [RouterModule, MatButtonModule],
  standalone: true,
})
export class MainContainerComponent {
  constructor(public themeModeService: ThemeModeService) {}

}
