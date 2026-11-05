import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  template: `
    <section id="competencias" class="skills section" aria-labelledby="skills-title">
      <div class="container">
        <h2 id="skills-title" class="section-heading">{{ language.isEnglish() ? 'Technical skills' : 'Competências técnicas' }}</h2>
        <dl>
          @for (group of groups; track group.pt) {
            <div><dt>{{ language.isEnglish() ? group.en : group.pt }}</dt><dd>{{ group.skills }}</dd></div>
          }
        </dl>
      </div>
    </section>
  `,
  styles: [`
    .skills { border-top: 1px solid var(--line); }
    dl { margin: 2rem 0 0; }
    dl > div { display: grid; grid-template-columns: 220px 1fr; gap: 2rem; padding: .85rem 0; border-bottom: 1px solid var(--line); }
    dt { font-weight: 600; font-size: .88rem; }
    dd { margin: 0; color: var(--ink-soft); font-size: .9rem; }
    @media(max-width: 700px) { dl > div { grid-template-columns: 1fr; gap: .4rem; } }
  `],
})
export class SkillsComponent {
  readonly language = inject(LanguageService);
  readonly groups = [
    { pt: 'Linguagens', en: 'Languages', skills: 'Go · C# · Python · PHP · TypeScript · Java' },
    { pt: 'Desenvolvimento', en: 'Development', skills: 'Vue.js · .NET · Node.js · React · Spring Boot · React Native' },
    { pt: 'Dados e IA', en: 'Data and AI', skills: 'PostgreSQL · MySQL · ETL / ELT · Power BI · LLMs · RAG' },
    { pt: 'Integrações', en: 'Integrations', skills: 'APIs REST · Workers · RCS · WABA' },
    { pt: 'Ferramentas', en: 'Tools', skills: 'Git · Docker · Kubernetes · SUSE Linux · Google Cloud' },
  ];
}
