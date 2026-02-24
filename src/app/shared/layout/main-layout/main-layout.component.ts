import { ChangeDetectionStrategy, Component } from '@angular/core';
import {SideBarComponent} from '../side-bar/side-bar.component';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-main-layout',
  imports: [SideBarComponent, RouterOutlet, HeaderComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class MainLayoutComponent {

}
