import {Directive, ElementRef, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appSvgDraggableDirective]',
  standalone: true
})
export class SvgDraggableDirective implements OnInit {

  private dragging = false;
  private startX = 0;
  private startY = 0;
  private x = 0;
  private y = 0;

  private container!: HTMLElement;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit() {
    const found = document.getElementById('drag');
    if (!found) throw new Error('Container #drag not found');
    this.container = found;
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    event.preventDefault();

    const element = this.el.nativeElement;

    if (element.style.position !== 'absolute') {
      const elementRect = element.getBoundingClientRect();
      const parentRect = this.container.getBoundingClientRect();

      this.x = elementRect.left - parentRect.left;
      this.y = elementRect.top - parentRect.top;

      element.style.position = 'absolute';
      element.style.left = `${this.x}px`;
      element.style.top = `${this.y}px`;
    } else {
      this.x = parseFloat(element.style.left) || 0;
      this.y = parseFloat(element.style.top) || 0;
    }

    this.dragging = true;
    this.startX = event.clientX - this.x;
    this.startY = event.clientY - this.y;

    element.style.cursor = 'grabbing';
    element.style.zIndex = '1000';
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.dragging) return;
    const container1 = document.getElementById('drag')!;

    const element = this.el.nativeElement;

    const parentRect = container1.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();

    let newX = event.clientX - this.startX;
    let newY = event.clientY - this.startY;

    const maxX = parentRect.width - elementRect.width;
    const maxY = parentRect.height - elementRect.height;

    newX = Math.max(0, Math.min(newX, maxX));
    newY = Math.max(0, Math.min(newY, maxY));

    this.x = newX;
    this.y = newY;

    // element.style.transform = `translate(${this.x}px, ${this.y}px)`;
    element.style.top = `${newY}px`;
    element.style.left = `${newX}px`;
  }

  @HostListener('window:mouseup')
  onMouseUp() {
    if (!this.dragging) return;

    this.dragging = false;

    const element = this.el.nativeElement;
    element.style.cursor = 'grab';
    element.style.zIndex = '1';
  }
}
