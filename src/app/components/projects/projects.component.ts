import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="projects section">
      <div class="container">
        <h2 class="section-title">Projetos</h2>
        <div class="projects-grid">
          <div class="project-card">
            <div class="project-content">
              <h3>MaintenanceApp</h3>
              <p>
                Aplicação para gestão de solicitações de manutenção de
                equipamentos. Sistema completo com registro de usuários,
                acompanhamento de serviços e pagamentos.
              </p>
              <div class="project-tech">
                <span>Angular</span>
                <span>Spring Boot</span>
                <span>PostgreSQL</span>
              </div>
              <ul class="project-features">
                <li>Solicitação de serviços</li>
                <li>Acompanhamento de status</li>
                <li>Sistema de pagamentos</li>
                <li>Gestão de funcionários</li>
              </ul>
            </div>
          </div>

          <div class="project-card">
            <div class="project-content">
              <h3>Typing Game</h3>
              <p>
                Sistema web para prática de digitação com recursos de
                gamificação. Inclui registro de usuários, login, cálculo de
                pontuação, histórico de partidas e gerenciamento de clãs.
              </p>
              <div class="project-tech">
                <span>HTML5</span>
                <span>CSS3</span>
                <span>JavaScript</span>
                <span>PHP</span>
                <span>MySQL</span>
              </div>
              <ul class="project-features">
                <li>Autenticação de usuários</li>
                <li>Sistema de ranking</li>
                <li>Gerenciamento de clãs</li>
                <li>Histórico de partidas</li>
              </ul>
            </div>
          </div>

          <div class="project-card">
            <div class="project-content">
              <h3>MenuApp</h3>
              <p>
                Sistema web de cardápio virtual para restaurantes desenvolvido
                com Spring Boot. Permite gerenciamento completo de menus e
                pedidos.
              </p>
              <div class="project-tech">
                <span>Java</span>
                <span>Spring Boot</span>
                <span>Maven</span>
                <span>SQL</span>
              </div>
              <ul class="project-features">
                <li>Gestão de cardápios</li>
                <li>Sistema de pedidos</li>
                <li>Interface administrativa</li>
              </ul>
            </div>
          </div>
          <div class="project-card">
            <div class="project-content">
              <h3>Automatizações no MPPR</h3>
              <p>
                Desenvolvimento automatizações de processos administrativos no
                Ministério Público do Paraná.
              </p>
              <div class="project-tech">
                <span>Javascript</span>
                <span>AppsScript</span>
              </div>
            </div>
          </div>

          <div class="project-card">
            <div class="project-content">
              <h3>Portfolio Pessoal</h3>
              <p>
                Website responsivo desenvolvido com Angular, apresentando minhas
                habilidades e projetos.
              </p>
              <div class="project-tech">
                <span>Angular</span>
                <span>TypeScript</span>
                <span>CSS3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .projects {
        background-color: var(--section-bg);
        padding: 6rem 0;
      }

      .section-title {
        text-align: center;
        font-size: 2.5rem;
        color: var(--text);
        margin-bottom: 3rem;
      }

      .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        max-width: 1200px;
        margin: 0 auto;
      }

      .project-card {
        background: var(--background);
        border-radius: 8px;
        overflow: hidden;
        box-shadow: var(--shadow);
        transition: transform 0.3s ease;
      }

      .project-card:hover {
        transform: translateY(-5px);
      }

      .project-content {
        padding: 1.5rem;
      }

      .project-content h3 {
        color: var(--text);
        margin-bottom: 1rem;
        font-size: 1.3rem;
      }

      .project-content p {
        color: var(--section-text);
        margin-bottom: 1.5rem;
        line-height: 1.6;
      }

      .project-tech {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 1rem;
      }

      .project-tech span {
        background: var(--text);
        color: var(--background);
        padding: 0.3rem 0.8rem;
        border-radius: 20px;
        font-size: 0.9rem;
      }

      .project-features {
        list-style: none;
        margin: 1rem 0;
        padding-left: 1.2rem;
      }

      .project-features li {
        position: relative;
        margin-bottom: 0.5rem;
        color: var(--section-text);
        font-size: 0.95rem;
      }

      .project-features li::before {
        content: '•';
        color: var(--text);
        position: absolute;
        left: -1rem;
      }

      @media (max-width: 768px) {
        .projects {
          padding: 4rem 0;
        }

        .section-title {
          font-size: 2rem;
        }

        .project-content {
          padding: 1.2rem;
        }
      }
    `,
  ],
})
export class ProjectsComponent {}
