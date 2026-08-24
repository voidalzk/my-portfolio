import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  template: `
    <section id="formacao" class="education section" aria-labelledby="education-title">
      <div class="container education-layout">
        <div>
          <h2 id="education-title" class="section-heading">06 — Formação acadêmica</h2>
        </div>

        <div class="education-list">
          <article>
            <p class="date">Concluído em 08/2026</p>
            <h3>Tecnologia em Análise e Desenvolvimento de Sistemas</h3>
            <p class="institution">Universidade Federal do Paraná — UFPR</p>
          </article>
          <article>
            <p class="date">Concluído em 2022</p>
            <h3>Inglês avançado</h3>
            <p class="institution">English Live Corporate</p>
          </article>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .education {
      border-bottom: 1px solid var(--line);
      background: var(--paper-raised);
    }

    .education-layout {
      display: grid;
      grid-template-columns: minmax(0, 0.8fr) minmax(320px, 0.75fr);
      gap: clamp(3rem, 9vw, 9rem);
    }

    .education-list {
      border-top: 1px solid var(--line);
    }

    article {
      padding: 2rem 0;
      border-bottom: 1px solid var(--line);
    }

    .date {
      margin: 0 0 1rem;
      color: var(--signal-deep);
      font-family: var(--mono);
      font-size: 0.7rem;
      text-transform: uppercase;
    }

    h3 {
      margin: 0;
      font-family: var(--display);
      font-size: clamp(1.55rem, 2.8vw, 2.35rem);
      font-weight: 500;
      letter-spacing: -0.035em;
      line-height: 1.1;
    }

    .institution { margin: 0.75rem 0 0; color: var(--ink-soft); }

    @media (max-width: 760px) {
      .education-layout { grid-template-columns: 1fr; }
    }
  `],
})
export class EducationComponent {}
