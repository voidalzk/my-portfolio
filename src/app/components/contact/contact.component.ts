import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section id="contato" class="contact section" aria-labelledby="contact-title">
      <div class="contact-orbit" aria-hidden="true"></div>
      <div class="container contact-content">
        <h2 id="contact-title" class="section-heading">07 — Contato</h2>
        <p class="contact-lead">
          Contato profissional para oportunidades em desenvolvimento de software e projetos.
        </p>

        <div class="contact-actions">
          <a class="email" href="mailto:voidalzk@gmail.com">
            <span>Escreva para</span>
            voidalzk&#64;gmail.com <strong aria-hidden="true">↗</strong>
          </a>
          <div class="social-links" aria-label="Links profissionais">
            <a href="https://www.linkedin.com/in/gabriel-voidaleski-40864a215/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a href="https://github.com/voidalzk" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href="assets/curriculo-gabriel-voidaleski.pdf" download>Currículo ↓</a>
          </div>
        </div>

        <footer>
          <span>Gabriel Voidaleski · Curitiba, PR</span>
          <span>Portfólio desenvolvido em Angular · {{ year }}</span>
        </footer>
      </div>
    </section>
  `,
  styles: [`
    .contact {
      position: relative;
      overflow: hidden;
      background: var(--ink);
      color: var(--paper);
    }

    .contact-orbit {
      position: absolute;
      top: -24rem;
      right: -17rem;
      width: 56rem;
      height: 56rem;
      border: 1px solid color-mix(in srgb, var(--paper) 14%, transparent);
      border-radius: 50%;
    }

    .contact-orbit::before,
    .contact-orbit::after {
      position: absolute;
      border: inherit;
      border-radius: inherit;
      content: '';
    }

    .contact-orbit::before { inset: 7rem; }
    .contact-orbit::after { inset: 14rem; background: color-mix(in srgb, var(--signal) 18%, transparent); }

    .contact-content { position: relative; z-index: 1; }
    .section-heading { color: var(--signal); }

    .contact-lead {
      max-width: 620px;
      margin: 2rem 0 0;
      color: color-mix(in srgb, var(--paper) 72%, transparent);
      font-size: clamp(1rem, 1.8vw, 1.22rem);
    }

    .contact-actions {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      align-items: end;
      gap: 3rem;
      margin-top: clamp(3rem, 5vw, 4.5rem);
      padding-bottom: 3rem;
      border-bottom: 1px solid color-mix(in srgb, var(--paper) 18%, transparent);
    }

    .email {
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      gap: 0.5rem 1rem;
      color: var(--paper);
      font-family: var(--display);
      font-size: clamp(1.65rem, 4vw, 3.4rem);
      text-decoration: none;
    }

    .email span {
      flex-basis: 100%;
      color: var(--signal);
      font-family: var(--mono);
      font-size: 0.68rem;
      text-transform: uppercase;
    }

    .email strong { color: var(--signal); }

    .social-links {
      display: flex;
      flex-direction: column;
      gap: 0.65rem;
      text-align: right;
    }

    .social-links a {
      color: color-mix(in srgb, var(--paper) 78%, transparent);
      font-family: var(--mono);
      font-size: 0.76rem;
      text-decoration: none;
    }

    .social-links a:hover { color: var(--signal); }

    footer {
      display: flex;
      justify-content: space-between;
      gap: 2rem;
      padding-top: 1.5rem;
      color: color-mix(in srgb, var(--paper) 52%, transparent);
      font-family: var(--mono);
      font-size: 0.64rem;
      text-transform: uppercase;
    }

    @media (max-width: 720px) {
      .contact-actions { grid-template-columns: 1fr; gap: 2rem; }
      .social-links { align-items: flex-start; text-align: left; }
      footer { flex-direction: column; gap: 0.4rem; }
    }
  `],
})
export class ContactComponent {
  readonly year = new Date().getFullYear();
}
