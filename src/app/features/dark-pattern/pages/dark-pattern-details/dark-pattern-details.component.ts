import {ChangeDetectionStrategy, Component, computed, inject,} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import {combineLatest, map, of, switchMap} from 'rxjs';
import {getCatalogById, isCatalogType} from '../models/catalog.type';
import {DarkPatternService} from '../../services/dark-pattern.service';
import {DatePipe, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-dark-pattern-details',
  imports: [
    NgOptimizedImage,
    DatePipe,
    RouterLink
  ],
  templateUrl: './dark-pattern-details.component.html',
  styleUrl: './dark-pattern-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class DarkPatternDetailsComponent {
  private route = inject(ActivatedRoute);
  private darkPatternService = inject(DarkPatternService);

  readonly type = toSignal(
    this.route.paramMap.pipe(
      map(params => params.get('type')),
      map(raw => isCatalogType(raw) ? raw : null)
    ),
    { initialValue: null }
  );

  readonly id = toSignal(

    this.route.paramMap.pipe(

      map(params => Number(params.get('id'))),
    ),
    { initialValue: null }
  );

  readonly darkPattern = toSignal(
    combineLatest([
      toObservable(this.type),
      toObservable(this.id)
    ]).pipe(

      switchMap(([type, id]) => {
        console.log(type)
        console.log(id)
        if (!type || !id) return of(null);
        return this.darkPatternService.getDarkPatternBySlug(type, id);
      })
    ),
    { initialValue: null }
  );

  readonly catalog = computed(() => {
    const pattern = this.darkPattern();
    if (!pattern) return null;

    return getCatalogById(pattern.catalog);
  });

  nowDate: Date = new Date();
}
