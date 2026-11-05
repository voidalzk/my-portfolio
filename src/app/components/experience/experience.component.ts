import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  readonly language = inject(LanguageService);
  readonly experiences = [
    {
      company: 'TRC Taborda', rolePt: 'Desenvolvedor Júnior', roleEn: 'Junior Developer',
      periodPt: '10/2026 — atual', periodEn: 'Oct 2026 — present',
      detailsPt: [
        'Desenvolvo aplicações full stack com Vue.js e Go e realizo manutenção em projetos em C#/.NET, Go, Python e PHP.',
        'Criei automações em Python e workers em Go. Implemento ETL/ELT, processamento em lote de dados financeiros e integrações com APIs externas, RCS e WABA da Meta.',
      ],
      detailsEn: [
        'I develop full stack applications with Vue.js and Go and maintain projects in C#/.NET, Go, Python and PHP.',
        'I created Python automation and Go workers. I implement ETL/ELT, bulk financial data processing and integrations with external APIs, RCS and Meta WABA.',
      ],
    },
    {
      company: 'Banco do Brasil', rolePt: 'Desenvolvedor Full Stack Estagiário', roleEn: 'Full Stack Developer Intern',
      periodPt: '03/2025 — 07/2026', periodEn: 'Mar 2025 — Jul 2026',
      detailsPt: [
        'Desenvolvi e sustentei aplicações com Node.js, Vue.js e PHP, APIs intermediárias para LLMs e fluxos RAG com indexação vetorial.',
        'Desenvolvi SQL e modelos de dados em PostgreSQL, MySQL e DB2, processos ETL/ELT e automações Python. Apliquei Power BI e sustentei servidores SUSE Linux.',
      ],
      detailsEn: [
        'Developed and maintained Node.js, Vue.js and PHP applications, intermediary APIs for LLMs and RAG workflows with vector indexing.',
        'Developed SQL and data models in PostgreSQL, MySQL and DB2, ETL/ELT processes and Python automation. Used Power BI and maintained SUSE Linux servers.',
      ],
    },
    {
      company: 'Freelancer', rolePt: 'Desenvolvedor de Software', roleEn: 'Software Developer',
      periodPt: '07/2026 — atual', periodEn: 'Jul 2026 — present',
      detailsPt: ['Desenvolvo aplicações e interfaces web com React, Java e Spring Boot, implementando funcionalidades e melhorias conforme cada projeto.'],
      detailsEn: ['I develop web applications and interfaces with React, Java and Spring Boot, implementing features and improvements for each project.'],
    },
    {
      company: 'Ministério Público do Paraná', rolePt: 'Estagiário', roleEn: 'Intern',
      periodPt: '07/2022 — 08/2024', periodEn: 'Jul 2022 — Aug 2024',
      detailsPt: ['Automatizei rotinas administrativas com JavaScript e Google Apps Script e criei dashboards no Google Sheets para acompanhar dados gerenciais.'],
      detailsEn: ['Automated administrative tasks with JavaScript and Google Apps Script and built Google Sheets dashboards to track management data.'],
    },
  ];
}
