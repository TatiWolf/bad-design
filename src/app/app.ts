import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
@ViewChild('intro')intro!: ElementRef
  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      document
        .querySelector('.main__header__router')
        ?.scrollTo(0, 0);
    });
  }
  ngAfterViewInit() {

    if (this.checkLocalStorage()) {
      this.intro.nativeElement.remove();
      return;
    }

    setTimeout(() => {
      this.intro.nativeElement.classList.add('intro-hide');
    }, 2500);

    setTimeout(() => {
      this.intro.nativeElement.remove();
      localStorage.setItem('animation', '1');
    }, 3500);
}

  checkLocalStorage() {
  return !!localStorage.getItem('animation')
  }

}
