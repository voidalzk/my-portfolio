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
            <h2 id="skills-title" class="section-heading">05 — {{ language.isEnglish() ? 'Technical skills' : 'Competências técnicas' }}</h2>
          </div>
          <p class="section-lead">
            {{ language.isEnglish()
              ? 'Web and mobile development, system integration, AI, data and infrastructure.'
              : 'Desenvolvimento web e mobile, integração de sistemas, IA, dados e infraestrutura.' }}
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
          <div>
            <p>Git · GitHub · GitLab · Kanban · Scrum</p>
            <p>{{ language.isEnglish() ? 'Proactivity, adaptability, continuous learning and collaboration in problem solving.' : 'Proatividade, adaptabilidade, aprendizado contínuo e colaboração na resolução de problemas.' }}</p>
            <p>{{ language.isEnglish() ? 'AI-assisted development with Claude, Codex and GitHub Copilot.' : 'Desenvolvimento assistido por IA com Claude, Codex e GitHub Copilot.' }}</p>
          </div>
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
    .workflow-note p + p { margin-top: 0.65rem; font-size: 0.88rem; }

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
    {
      index: '02', titlePt: 'Frontend & mobile', titleEn: 'Frontend & mobile',
      skills: ['React', 'Vue.js', 'Angular', 'React Native', 'Expo'],
      notePt: 'Interfaces web em experiências profissionais e projetos; desenvolvimento mobile no TCC Appunture.',
      noteEn: 'Web interfaces in professional work and projects; mobile development in the Appunture degree project.',
    },
    {
      index: '03',
      titlePt: 'Backend & integrações',
      titleEn: 'Backend & integrations',
      skills: ['Node.js', 'Spring Boot', 'REST APIs', 'Microservices', 'RabbitMQ', 'Sagas'],
      notePt: 'APIs e integrações corporativas no Banco do Brasil; microsserviços, mensageria e sagas no projeto FlyHigh.',
      noteEn: 'Enterprise APIs and integrations at Banco do Brasil; microservices, messaging and sagas in the FlyHigh project.',
    },
    {
      index: '04',
      titlePt: 'Dados & analytics',
      titleEn: 'Data & analytics',
      skills: ['SQL', 'PostgreSQL', 'MySQL', 'DB2', 'ETL / ELT', 'Power BI', 'Google Sheets'],
      notePt: 'Consultas, modelos de dados, automação e visualização. Conhecimentos também em MongoDB e Oracle Database.',
      noteEn: 'Queries, data models, automation and visualization. Additional knowledge of MongoDB and Oracle Database.',
    },
    {
      index: '05',
      titlePt: 'Infraestrutura & cloud',
      titleEn: 'Infrastructure & cloud',
      skills: ['SUSE Linux', 'Docker', 'Docker Compose', 'Kubernetes', 'Azure', 'Google Cloud', 'Firebase'],
      notePt: 'Sustentação de servidores Linux no Banco do Brasil e uso de containers e serviços cloud em projetos.',
      noteEn: 'Linux server support at Banco do Brasil, with containers and cloud services used in projects.',
    },
    {
      index: '06',
      titlePt: 'Inteligência artificial',
      titleEn: 'Artificial intelligence',
      skills: ['LLMs', 'RAG', 'Spring AI', 'Vertex AI', 'Gemini'],
      notePt: 'Integrações com LLMs e participação em soluções RAG no Banco do Brasil; assistente de IA no Appunture.',
      noteEn: 'LLM integrations and contributions to RAG solutions at Banco do Brasil; an AI assistant in Appunture.',
    },
  ];
}
