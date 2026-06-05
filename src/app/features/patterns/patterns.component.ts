import { ChangeDetectionStrategy, Component } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs';

@Component({
  selector: 'app-patterns',
  imports: [],
  templateUrl: './patterns.component.html',
  styleUrl: './patterns.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatternsComponent {
  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      document
        .querySelector('.main__header__router')
        ?.scrollTo(0, 0);
    });
  }
}
