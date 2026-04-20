import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ActivatedRoute, Router, RouterLink, RouterLinkActive} from '@angular/router';
import {DarkPatternService} from '../../../features/dark-pattern/services/dark-pattern.service';
import {NgOptimizedImage} from '@angular/common';
import {map} from 'rxjs';
import {isCatalogType} from '../../../features/dark-pattern/pages/models/catalog.type';
import {toSignal} from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-side-bar',
  imports: [
    RouterLink,
    RouterLinkActive,
    NgOptimizedImage
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class SideBarComponent {
  private darkPatternService = inject(DarkPatternService);
  private router: Router = inject(Router);
  readonly catalogs = this.darkPatternService.catalogs
  private route = inject(ActivatedRoute);

  closeTest(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();
    const id = this.route.firstChild?.snapshot.paramMap.get('id');
    const type = this.route.firstChild?.snapshot.paramMap.get('type');
      if (Number(id)) {
        this.router.navigate(['/', type]);

        } else {
        this.router.navigate(['/']);

      }

  }

  readonly id = toSignal(
    this.route.url.pipe(
      map(() => {
        let route = this.route;
        while (route.firstChild) route = route.firstChild;
        const id = route.snapshot.paramMap.get('id');
        return id ? Number(id) : null;
      })
    ),
    { initialValue: null }
  );

  readonly type = toSignal(
    this.route.paramMap.pipe(
      map(params => params.get('type')),
      map(raw => isCatalogType(raw) ? raw : null)
    ),
    {initialValue: null}
  );
}
