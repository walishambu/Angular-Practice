import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDemo]',
})
export class DemoDirective {
  @HostBinding('style.border') border: string;

  @HostListener('mouseover') onclick() {
    this.changeColor('blue');
    this.border = '2px solid red';
  }

  @HostListener('mouseout') mouseout() {
    this.changeColor('red');
    this.border = '2px solid blue';
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.changeColor('red');
  }

  changeColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}
