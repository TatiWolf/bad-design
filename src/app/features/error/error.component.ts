import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  OnInit, QueryList,
  ViewChild, ViewChildren
} from '@angular/core';
import {interval, Subscription} from 'rxjs';
import {SvgDraggableDirective} from '../../core/directive/svg-draggable-directive';

@Component({
  selector: 'app-error',
  imports: [
    SvgDraggableDirective
  ],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class ErrorComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChildren('draggable')
  draggables!: QueryList<ElementRef<SVGElement>>;

  fill = 'black';
  private sub!: Subscription;

  ngAfterViewInit() {
    // const container = document.getElementById('drag')!;
    // container.style.position = 'relative';

    this.draggables.forEach(el => {
      this.fixedPosition(el);
    });
    this.draggables.forEach(el => {
      this.convertToAbsolute(el);
    });
  }

  private fixedPosition(
    elementRef: ElementRef<SVGElement>
  ) {
    const element = elementRef.nativeElement;
    const container = document.getElementById('drag')!;

    const containerRect = container.getBoundingClientRect();
    const rect = element.getBoundingClientRect();

    const top = rect.top - containerRect.top;
    element.style.left = `${rect.x}px`;
    element.style.top = `${top}px`;
  }

  convertToAbsolute(elementRef: ElementRef<SVGElement>) {
    const element = elementRef.nativeElement;

    element.style.position = 'absolute';
  }

  ngOnInit() {
    this.sub = interval(1000).subscribe(() => {
      this.fill = this.fill === 'red' ? 'black' : 'red';
    });

  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
