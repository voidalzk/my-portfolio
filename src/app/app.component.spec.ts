import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    localStorage.removeItem('portfolio-language');
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should expose the professional portfolio title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Gabriel Voidaleski | Desenvolvedor Full Stack');
  });

  it('should render the main professional message', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Gabriel Voidaleski');
  });

  it('switches the portfolio and resume link to English', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const languageButton = compiled.querySelector<HTMLButtonElement>('.language-toggle');
    expect(languageButton?.textContent?.trim()).toBe('EN');
    languageButton?.click();
    fixture.detectChanges();

    expect(compiled.querySelector('#experience-title')?.textContent).toContain('Professional experience');
    expect(compiled.querySelector<HTMLAnchorElement>('.hero-actions a[download]')?.getAttribute('href'))
      .toBe('assets/curriculum-gabriel-voidaleski-en.pdf');
    expect(document.documentElement.lang).toBe('en');

    languageButton?.click();
    fixture.detectChanges();
    expect(document.documentElement.lang).toBe('pt-BR');
  });

  it('shows four projects and switches their screenshots', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const projects = compiled.querySelectorAll<HTMLElement>('.case-study');

    expect(projects.length).toBe(4);
    expect(projects[0].textContent).toContain('Jungle Wagering Processor');
    expect(projects[0].textContent).toContain('at-least-once');
    expect(projects[1].textContent).toContain('Appunture');
    expect(projects[2].textContent).toContain('FlyHigh');
    expect(projects[2].textContent).toContain('Docker Compose');
    expect(projects[2].textContent).toContain('saga de reserva');
    expect(projects[3].textContent).toContain('MaintenanceApp');

    projects[2].querySelectorAll<HTMLButtonElement>('.gallery-tabs button')[1].click();
    fixture.detectChanges();
    expect(projects[2].querySelector<HTMLImageElement>('.gallery-stage img')?.getAttribute('src'))
      .toBe('assets/projects/flyhigh/landing.png');
    expect(projects[2].querySelector<HTMLButtonElement>('.gallery-tabs button.active')?.getAttribute('aria-pressed'))
      .toBe('true');
  });

  it('prioritizes projects before professional experience', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const sections = Array.from(compiled.querySelectorAll('main > *')).map(el => el.tagName);
    expect(sections.indexOf('APP-PROJECTS')).toBeLessThan(sections.indexOf('APP-EXPERIENCE'));
    expect(compiled.querySelector('.hero-actions a')?.getAttribute('href')).toBe('#projetos');
  });

  it('reflects the current TRC role without exposing freelance project names', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const firstExperience = compiled.querySelector('.experience-item');
    expect(firstExperience?.textContent).toContain('TRC Taborda');
    expect(firstExperience?.textContent).toContain('10/2026');
    expect(firstExperience?.textContent).toContain('C#/.NET');
    expect(compiled.textContent).not.toContain('MyLudPlay');
  });

  it('provides documented backend diagrams and switches between them', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const jungle = compiled.querySelector('.case-study')!;
    const tabs = jungle.querySelectorAll<HTMLButtonElement>('.gallery-tabs button');
    expect(tabs.length).toBe(3);
    tabs[2].click();
    fixture.detectChanges();
    expect(jungle.querySelector('img')?.getAttribute('src')).toBe('assets/projects/jungle/recovery.svg');
    expect(jungle.querySelector('a[href$="architecture-diagrams.md"]')).toBeTruthy();
    expect(jungle.querySelector('details summary')?.textContent).toContain('Detalhes');
  });

  it('keeps internal anchors connected to existing sections', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const ids = new Set(Array.from(compiled.querySelectorAll('[id]')).map(el => el.id));
    compiled.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(link => {
      expect(ids.has(link.getAttribute('href')!.slice(1))).withContext(link.outerHTML).toBeTrue();
    });
  });
});
