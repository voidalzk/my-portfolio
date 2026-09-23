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
});
