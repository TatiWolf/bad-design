import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import {combineLatest, map, of, switchMap} from 'rxjs';
import {isCatalogType} from '../models/catalog.type';
import {DarkPatternService} from '../../services/dark-pattern.service';
import {LowerCasePipe} from '@angular/common';

@Component({
  selector: 'app-dark-pattern-list',
  imports: [
    RouterLink,
    LowerCasePipe
  ],
  templateUrl: './dark-pattern-list.component.html',
  styleUrl: './dark-pattern-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class DarkPatternListComponent {
  private darkPatternService = inject(DarkPatternService);

  private route: ActivatedRoute = inject(ActivatedRoute)
  private router: Router = inject(Router);


  readonly type = toSignal(
    this.route.paramMap.pipe(
      map(params => params.get('type')),
      map(raw => isCatalogType(raw) ? raw : null)
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

    if (!type) {
      this.router.navigate(['error'])
    }

    return catalogs.find(c => c.slug === type) ?? null;
  });

  readonly darkPattern = toSignal(
    combineLatest([
      toObservable(this.type),
    ]).pipe(
      switchMap(([type]) => {
        if (!type) return of(null);
        return this.darkPatternService.getDarkPatternById(type);
      })
    ),
    { initialValue: null }
  );


}
