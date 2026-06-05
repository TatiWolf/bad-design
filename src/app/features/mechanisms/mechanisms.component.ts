import { ChangeDetectionStrategy, Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-mechanisms',
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './mechanisms.component.html',
  styleUrl: './mechanisms.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MechanismsComponent {

}
