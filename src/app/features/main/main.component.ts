import { ChangeDetectionStrategy, Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [
    NgOptimizedImage,
    RouterLink,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class MainComponent {

}
