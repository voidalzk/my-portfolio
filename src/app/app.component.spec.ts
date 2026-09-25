import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
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

  it('shows three projects and switches their screenshots', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const projects = compiled.querySelectorAll<HTMLElement>('.case-study');

    expect(projects.length).toBe(3);
    expect(projects[0].textContent).toContain('Appunture');
    expect(projects[1].textContent).toContain('FlyHigh');
    expect(projects[1].textContent).toContain('Docker Compose');
    expect(projects[1].textContent).toContain('saga de reserva');
    expect(projects[2].textContent).toContain('MaintenanceApp');

    projects[1].querySelectorAll<HTMLButtonElement>('.gallery-tabs button')[1].click();
    fixture.detectChanges();
    expect(projects[1].querySelector<HTMLImageElement>('.gallery-stage img')?.getAttribute('src'))
      .toBe('assets/projects/flyhigh/landing.png');
    expect(projects[1].querySelector<HTMLButtonElement>('.gallery-tabs button.active')?.getAttribute('aria-pressed'))
      .toBe('true');
  });
});
