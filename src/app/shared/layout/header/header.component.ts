import {Component, ElementRef, inject, ViewChild} from '@angular/core';
import {DatePipe, NgOptimizedImage} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';
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
  private darkPatternService = inject(DarkPatternService);

  @ViewChild('header') header!: ElementRef<HTMLDivElement>;

  logo: string = '/logos/badlogo-header.svg';
  isOpen = false;
  nowDate: Date = new Date();

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }


  readonly catalogs = this.darkPatternService.catalogs

}
