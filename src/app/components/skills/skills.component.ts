import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="skills section">
      <div class="container">
        <h2 class="section-title">Habilidades</h2>
        <div class="skills-grid">
          <div class="skill-category">
            <h3>Frontend</h3>
            <ul class="skill-list">
              <li><i class="fab fa-html5"></i> HTML5</li>
              <li><i class="fab fa-css3-alt"></i> CSS3</li>
              <li><i class="fab fa-js"></i> JavaScript</li>
              <li><i class="fab fa-angular"></i> Angular</li>
            </ul>
          </div>
          <div class="skill-category">
            <h3>Backend</h3>
            <ul class="skill-list">
              <li><i class="fab fa-node-js"></i> Node.js</li>
              <li><i class="fab fa-java"></i> Java</li>
              <li><i class="fas fa-leaf"></i> Spring Boot</li>
            </ul>
          </div>
          <div class="skill-category">
            <h3>Ferramentas</h3>
            <ul class="skill-list">
              <li><i class="fab fa-git-alt"></i> Git</li>
              <li><i class="fas fa-database"></i> SQL</li>
              <li><i class="fab fa-docker"></i> Docker</li>
              <li><i class="fab fa-postgres"></i> PostgreSQL</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills {
      background-color: var(--background);
      padding: 6rem 0;
    }

    .section-title {
      text-align: center;
      font-size: 2.5rem;
      color: var(--primary);
      margin-bottom: 3rem;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      max-width: 1000px;
      margin: 0 auto;
    }

    .skill-category {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: var(--shadow);
    }

    .skill-category h3 {
      color: var(--primary);
      margin-bottom: 1.5rem;
      font-size: 1.5rem;
      text-align: center;
    }

    .skill-list {
      list-style: none;
    }

    .skill-list li {
      margin: 1rem 0;
      font-size: 1.1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .skill-list i {
      color: var(--secondary);
      font-size: 1.2rem;
    }

    @media (max-width: 768px) {
      .skills {
        padding: 4rem 0;
      }

      .section-title {
        font-size: 2rem;
      }
    }
  `]
})
export class SkillsComponent {}
