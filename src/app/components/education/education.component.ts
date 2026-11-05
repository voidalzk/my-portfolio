import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-education',
  standalone: true,
  template: `
    <section id="formacao" class="education section" aria-labelledby="education-title">
      <div class="container education-layout">
        <h2 id="education-title" class="section-heading">{{ language.isEnglish() ? 'Education' : 'Formação' }}</h2>
        <div>
          <h3>{{ language.isEnglish() ? 'Systems Analysis and Development' : 'Análise e Desenvolvimento de Sistemas' }}</h3>
          <p>{{ language.isEnglish() ? 'Federal University of Paraná · Technology degree · Completed Aug 2026' : 'Universidade Federal do Paraná · Tecnólogo · Concluído em 08/2026' }}</p>
          <a href="#project-appunture">{{ language.isEnglish() ? 'Capstone project: Appunture' : 'TCC: Appunture' }} ↗</a>
          <p class="english">{{ language.isEnglish() ? 'Advanced English · English Live Corporate, 2022.' : 'Inglês avançado · English Live Corporate, 2022.' }}</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .education { border-top: 1px solid var(--line); }
    .education-layout { display: grid; grid-template-columns: 220px 1fr; gap: 2rem; }
    h3 { margin: 0; font-size: 1rem; font-weight: 600; }
    p { margin: .4rem 0; color: var(--ink-soft); font-size: .88rem; }
    a { font-size: .85rem; color: var(--signal-deep); }
    .english { margin-top: 1.2rem; }
    @media(max-width: 700px) { .education-layout { grid-template-columns: 1fr; gap: 1.5rem; } }
  `],
})
export class EducationComponent { readonly language = inject(LanguageService); }
