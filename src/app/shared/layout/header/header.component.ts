import {Component, ElementRef, inject, ViewChild} from '@angular/core';
import {DatePipe, NgOptimizedImage} from '@angular/common';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {SideBarComponent} from '../side-bar/side-bar.component';
import {DarkPatternService} from '../../../features/dark-pattern/services/dark-pattern.service';

@Component({
  selector: 'app-header',
  imports: [
    NgOptimizedImage,
    RouterLinkActive,
    RouterLink,
    DatePipe,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true
})
export class HeaderComponent {

  @ViewChild('header') header!: ElementRef<HTMLDivElement>;

  logo: string = '/logos/badlogo-header.svg';
  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  private darkPatternService = inject(DarkPatternService);
  private router: Router = inject(Router);

  readonly catalogs = this.darkPatternService.catalogs
  nowDate: Date = new Date();

  closeMenu() {
    this.isOpen = false;
  }
}
