import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appFadeIn]'
})
export class FadeInDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if(entry.isIntersecting){
            this.renderer.addClass(this.el.nativeElement, 'fade-in');
            observer.unobserve(this.el.nativeElement);
          }
        });
      });
      observer.observe(this.el.nativeElement);
    } else {
      this.renderer.addClass(this.el.nativeElement, 'fade-in');
    }
  }
}
