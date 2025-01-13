import { Directive, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

@Directive({
  selector: '[appSmoothScroll]'
})
export class SmoothScrollDirective {
  constructor(private el: ElementRef) {
    gsap.registerPlugin(ScrollSmoother);

    ScrollSmoother.create({
      wrapper: this.el.nativeElement,
      content: this.el.nativeElement.querySelector('.smooth-content'),
      smooth: 1.5,
      effects: true
    });
  }
}
