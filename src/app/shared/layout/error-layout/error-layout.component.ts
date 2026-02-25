import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {SideBarComponent} from "../side-bar/side-bar.component";
import {ErrorComponent} from '../../../features/error/error.component';

@Component({
  selector: 'app-error-layout',
  imports: [
    HeaderComponent,
    SideBarComponent,
    ErrorComponent
  ],
  templateUrl: './error-layout.component.html',
  styleUrl: './error-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorLayoutComponent {

}
