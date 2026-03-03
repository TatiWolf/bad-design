import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {DarkPatternService} from '../../../features/dark-pattern/services/dark-pattern.service';
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

  readonly catalogs = this.darkPatternService.catalogs
}
