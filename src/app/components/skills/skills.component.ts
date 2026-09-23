import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

interface SkillGroup {
  index: string;
  titlePt: string;
  titleEn: string;
  skills: string[];
  notePt?: string;
  noteEn?: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  template: `
    <section id="competencias" class="skills section" aria-labelledby="skills-title">
      <div class="container">
        <div class="skills-heading">
          <div>
            <h2 id="skills-title" class="section-heading">04 — {{ language.isEnglish() ? 'Technical skills' : 'Competências técnicas' }}</h2>
          </div>
          <p class="section-lead">
            {{ language.isEnglish()
              ? 'Technologies used in professional experience, education and projects.'
              : 'Tecnologias utilizadas em experiências profissionais, formação acadêmica e projetos.' }}
          </p>
        </div>

        <div class="skill-groups">
          @for (group of groups; track group.index) {
            <article>
              <div class="group-title">
                <span>{{ group.index }}</span>
                <h3>{{ language.isEnglish() ? group.titleEn : group.titlePt }}</h3>
              </div>
              <div class="skill-list">
                @for (skill of group.skills; track skill) {
                  <span>{{ skill }}</span>
                }
              </div>
              @if (group.notePt) {
                <p>{{ language.isEnglish() ? group.noteEn : group.notePt }}</p>
              }
            </article>
          }
        </div>

        <div class="workflow-note">
          <span class="workflow-label">{{ language.isEnglish() ? 'Ways of working' : 'Modo de trabalho' }}</span>
          <p>Kanban · Scrum · Git/GitHub/GitLab · {{ language.isEnglish() ? 'AI-assisted coding with Claude, Codex and GitHub Copilot' : 'programação assistida por Claude, Codex e GitHub Copilot' }}</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills { background: var(--paper); }

    .skills-heading {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(280px, 0.5fr);
      align-items: end;
      gap: clamp(2rem, 7vw, 7rem);
    }

    .skill-groups {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      margin-top: clamp(3.5rem, 7vw, 6rem);
      border-top: 1px solid var(--line);
      border-left: 1px solid var(--line);
    }

    article {
      min-height: 260px;
      padding: clamp(1.5rem, 3vw, 2.5rem);
      border-right: 1px solid var(--line);
      border-bottom: 1px solid var(--line);
    }

    .group-title {
      display: flex;
      align-items: baseline;
      gap: 1rem;
    }

    .group-title span {
      color: var(--signal-deep);
      font-family: var(--mono);
      font-size: 0.7rem;
    }

    h3 {
      margin: 0;
      font-family: var(--display);
      font-size: clamp(1.6rem, 2.7vw, 2.25rem);
      font-weight: 500;
      letter-spacing: -0.035em;
    }

    .skill-list {
      display: flex;
      flex-wrap: wrap;
      gap: 0.55rem;
      margin-top: 2rem;
    }

    .skill-list span {
      padding: 0.45rem 0.75rem;
      border: 1px solid var(--line);
      border-radius: 999px;
      background: var(--paper-raised);
      font-family: var(--mono);
      font-size: 0.72rem;
    }

    article p {
      margin: 1.25rem 0 0;
      color: var(--ink-soft);
      font-size: 0.88rem;
    }

    .workflow-note {
      display: grid;
      grid-template-columns: minmax(160px, 0.28fr) 1fr;
      align-items: center;
      gap: 2rem;
      padding: 1.7rem 0;
      border-bottom: 1px solid var(--line);
    }

    .workflow-label {
      color: var(--signal-deep);
      font-family: var(--mono);
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
    }

    .workflow-note p { margin: 0; color: var(--ink-soft); }

    @media (max-width: 760px) {
      .skills-heading, .skill-groups { grid-template-columns: 1fr; }
      .workflow-note { grid-template-columns: 1fr; gap: 0.5rem; }
      article { min-height: auto; }
    }
  `],
})
export class SkillsComponent {
  readonly language = inject(LanguageService);
  readonly groups: SkillGroup[] = [
    { index: '01', titlePt: 'Linguagens', titleEn: 'Languages', skills: ['JavaScript', 'TypeScript', 'PHP', 'Python', 'Java'] },
    { index: '02', titlePt: 'Frameworks & aplicações', titleEn: 'Frameworks & applications', skills: ['React', 'Node.js', 'Vue.js', 'React Native', 'Angular', 'Spring Boot'] },
    {
      index: '03',
      titlePt: 'Dados',
      titleEn: 'Data',
      skills: ['SQL', 'PostgreSQL', 'MySQL', 'DB2', 'MongoDB', 'Oracle Database'],
      notePt: 'MongoDB e Oracle Database: conhecimentos registrados no currículo.',
      noteEn: 'MongoDB and Oracle Database: working knowledge listed in the resume.',
    },
    {
      index: '04',
      titlePt: 'Infraestrutura & IA',
      titleEn: 'Infrastructure & AI',
      skills: ['SUSE Linux', 'Azure', 'Google Cloud', 'Git', 'RAG'],
      notePt: 'Integrações com inteligência artificial e desenvolvimento assistido por agentes.',
      noteEn: 'AI integrations and agent-assisted software development.',
    },
  ];
}
