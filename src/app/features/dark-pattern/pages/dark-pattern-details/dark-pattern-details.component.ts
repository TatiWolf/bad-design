import {ChangeDetectionStrategy, Component,} from '@angular/core';

@Component({
  selector: 'app-dark-pattern-details',
  imports: [],
  templateUrl: './dark-pattern-details.component.html',
  styleUrl: './dark-pattern-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class DarkPatternDetailsComponent {
}
