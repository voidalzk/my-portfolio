import { afterNextRender, Component, DestroyRef, ElementRef, inject, NgZone, viewChild } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  readonly language = inject(LanguageService);
  private readonly strand = viewChild.required<ElementRef<SVGPathElement>>('strand');
  private readonly zone = inject(NgZone);
  private frame = 0;

  constructor() {
    afterNextRender(() => this.vibrate(320));
    inject(DestroyRef).onDestroy(() => {
      if (this.frame) cancelAnimationFrame(this.frame);
    });
  }

  touchLine(event: PointerEvent): void {
    const bounds = (event.currentTarget as SVGSVGElement).getBoundingClientRect();
    this.vibrate((event.clientX - bounds.left) * 1000 / bounds.width);
  }

  private vibrate(x: number): void {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    cancelAnimationFrame(this.frame);
    const path = this.strand().nativeElement;
    const start = performance.now();
    const left = Math.max(0, x - 150);
    const right = Math.min(1000, x + 150);
    const draw = (now: number) => {
      const t = (now - start) / 1000;
      if (t >= 1) {
        path.setAttribute('d', 'M0 24 H1000');
        this.frame = 0;
        return;
      }
      const peak = 24 - Math.sin(t * 22) * Math.exp(-5 * t) * 24;
      path.setAttribute('d', `M0 24 H${left} C${(left + x) / 2} 24 ${(left + x) / 2} ${peak} ${x} ${peak} S${(right + x) / 2} 24 ${right} 24 H1000`);
      this.frame = requestAnimationFrame(draw);
    };
    this.zone.runOutsideAngular(() => { this.frame = requestAnimationFrame(draw); });
  }
}
