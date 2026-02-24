import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {CatalogModel} from '../../../features/dark-pattern/pages/models/catalog.model';
import {DarkPatternService} from '../../../features/dark-pattern/services/dark-pattern.service';
import {toSignal} from '@angular/core/rxjs-interop';



@Component({
  selector: 'app-side-bar',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class SideBarComponent {
  private darkPatternService = inject(DarkPatternService);

  readonly catalogs = toSignal(
    this.darkPatternService.getCatalog(),
    {initialValue: [] as CatalogModel[]}
  )

}
