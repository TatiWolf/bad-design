import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop';
import {map} from 'rxjs';
import {isDarkPatternType} from '../models/dark-pattern.type';
import {DarkPatternService} from '../../services/dark-pattern.service';

@Component({
  selector: 'app-dark-pattern-list',
  imports: [
    RouterLink
  ],
  templateUrl: './dark-pattern-list.component.html',
  styleUrl: './dark-pattern-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class DarkPatternListComponent {
  private darkPatternService = inject(DarkPatternService);

  private route: ActivatedRoute = inject(ActivatedRoute)


  readonly type = toSignal(
    this.route.paramMap.pipe(
      map(params => params.get('type')),
      map(raw => isDarkPatternType(raw) ? raw : null)
    ),
    {initialValue: null}
  );

  readonly catalogs = toSignal(
    this.darkPatternService.getCatalog(),
    { initialValue: [] }
  );

  readonly selectedPattern = computed(() => {
    const type = this.type();
    const catalogs = this.catalogs();

    if (!type) return null;

    return catalogs.find(c => c.slug === type) ?? null;
  });
}
