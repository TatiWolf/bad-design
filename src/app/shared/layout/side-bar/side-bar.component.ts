import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {CatalogModel} from '../../../features/dark-pattern/pages/models/catalog.model';
import {DarkPatternService} from '../../../features/dark-pattern/services/dark-pattern.service';
import {toSignal} from '@angular/core/rxjs-interop';
import {NgOptimizedImage} from '@angular/common';



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

  readonly catalogs = toSignal(
    this.darkPatternService.getCatalog(),
    {initialValue: [] as CatalogModel[]}
  )


  closeTest(event: MouseEvent) {
  //   event.stopPropagation();
  // this.router.navigate(['/']);
  }
}
