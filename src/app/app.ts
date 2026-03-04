import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
@ViewChild('intro')intro!: ElementRef

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
