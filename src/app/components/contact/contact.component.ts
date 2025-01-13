import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="contact section">
      <div class="container">
        <h2 class="section-title">Contato</h2>
        <div class="contact-content">
          <div class="contact-info">
            <div class="contact-item">
              <i class="fas fa-envelope"></i>
              <a href="mailto:gabriel.voidaleski@gmail.com">voidalzk&#64;gmail.com</a>
            </div>
            <div class="contact-item">
              <i class="fab fa-linkedin"></i>
              <a href="https://www.linkedin.com/in/gabriel-voidaleski-40864a215/" target="_blank">LinkedIn</a>
            </div>
            <div class="contact-item">
              <i class="fab fa-instagram"></i>
              <a href="https://www.instagram.com/gabrielvdlzk/" target="_blank">Instagram</a>
            </div>
            <div class="contact-item">
              <i class="fab fa-github"></i>
              <a href="https://github.com/voidalzk" target="_blank">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact {
      background-color: var(--background);
      padding: 6rem 0;
    }

    .section-title {
      text-align: center;
      font-size: 2.5rem;
      color: var(--text);
      margin-bottom: 3rem;
    }

    .contact-content {
      background: var(--section-bg);
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: var(--shadow);
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .contact-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 1.1rem;
    }

    .contact-item i {
      color: var(--text);
      font-size: 1.5rem;
      width: 1.5rem;
      text-align: center;
    }

    .contact-item a {
      color: var(--section-text);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .contact-item a:hover {
      color: var(--text);
    }

    @media (max-width: 768px) {
      .contact {
        padding: 4rem 0;
      }

      .section-title {
        font-size: 2rem;
      }

      .contact-content {
        padding: 1.5rem;
      }
    }
  `]
})
export class ContactComponent {}
