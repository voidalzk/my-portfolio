import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

interface ProjectImage {
  src: string;
  altPt: string;
  altEn: string;
  captionPt: string;
  captionEn: string;
  portrait?: boolean;
  diagram?: boolean;
}

interface PortfolioProject {
  id: string;
  number: string;
  name: string;
  categoryPt: string;
  categoryEn: string;
  descriptionPt: string;
  descriptionEn: string;
  highlightsPt: string[];
  highlightsEn: string[];
  stack: string[];
  images: ProjectImage[];
  links?: { label: string; labelEn?: string; url: string }[];
  notePt?: string;
  noteEn?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  readonly language = inject(LanguageService);

  readonly projects: PortfolioProject[] = [
    {
      id: 'jungle', number: '01', name: 'Jungle Wagering Processor',
      categoryPt: 'Backend · teste técnico', categoryEn: 'Backend · technical assessment',
      descriptionPt: 'API de processamento de apostas e carteiras. Implementei o núcleo transacional para manter saldo, operações e ledger consistentes mesmo com requisições concorrentes e mensagens repetidas.',
      descriptionEn: 'A wagering and wallet-processing API. I implemented the transactional core to keep balances, operations and the ledger consistent under concurrent requests and repeated messages.',
      highlightsPt: [
        'HTTP e SQS compartilham o mesmo caso de uso. Lock por carteira, chaves de idempotência e constraints do PostgreSQL protegem as movimentações.',
        'Inbox e outbox transacionais separam o commit financeiro da publicação de eventos. Workers tratam retries, referências fora de ordem e DLQ.',
        'Valores monetários em bigint; ledger append-only, reconciliação, logs estruturados e métricas Prometheus.',
        'Testes de domínio, banco real, SQS e múltiplos processos. A validação em containers está registrada no repositório, sem alegação de benchmark ou capacidade de produção.',
      ],
      highlightsEn: [
        'HTTP and SQS share one use case. Per-wallet locks, idempotency keys and PostgreSQL constraints protect balance changes.',
        'Transactional inbox and outbox separate the financial commit from event publication. Workers handle retries, out-of-order references and the DLQ.',
        'Money represented with bigint; append-only ledger, reconciliation, structured logs and Prometheus metrics.',
        'Domain, real database, SQS and multi-process tests. Container validation is recorded in the repository, with no production-capacity or benchmark claims.',
      ],
      notePt: 'Projeto local de avaliação: sem interface ou autenticação ativa. Entrega de eventos at-least-once; não há promessa de exactly-once.',
      noteEn: 'Local assessment project: no UI or active authentication. At-least-once event delivery; no exactly-once guarantee.',
      stack: ['TypeScript', 'NestJS', 'Bun', 'PostgreSQL', 'TypeORM', 'SQS', 'Docker'],
      images: [
        { src: 'assets/projects/jungle/architecture.svg', altPt: 'Arquitetura do Jungle: HTTP e SQS compartilham o núcleo transacional, PostgreSQL, inbox e outbox', altEn: 'Jungle architecture: HTTP and SQS share a transactional core, PostgreSQL, inbox and outbox', captionPt: 'Arquitetura e limites', captionEn: 'Architecture and boundaries', diagram: true },
        { src: 'assets/projects/jungle/transaction.svg', altPt: 'Fluxo de uma transação com lock da carteira, idempotência, ledger e outbox no mesmo commit', altEn: 'Transaction flow with wallet locking, idempotency, ledger and outbox in the same commit', captionPt: 'Transação e idempotência', captionEn: 'Transaction and idempotency', diagram: true },
        { src: 'assets/projects/jungle/recovery.svg', altPt: 'Recuperação de falhas: redelivery deduplicado, publicação da outbox e referência pendente', altEn: 'Failure recovery: deduplicated redelivery, outbox publication and pending references', captionPt: 'Falhas e recuperação', captionEn: 'Failure recovery', diagram: true },
      ],
      links: [
        { label: 'GitHub', url: 'https://github.com/voidalzk/jungle-wagering-processor' },
        { label: 'Diagramas e decisões', labelEn: 'Diagrams and decisions', url: 'https://github.com/voidalzk/jungle-wagering-processor/blob/main/docs/architecture-diagrams.md' },
        { label: 'Markdown', url: 'assets/projects/jungle/architecture-diagrams.md' },
      ],
    },
    {
      id: 'appunture', number: '02', name: 'Appunture',
      categoryPt: 'Mobile · TCC em equipe', categoryEn: 'Mobile · team capstone project',
      descriptionPt: 'Consulta de pontos de acupuntura em um aplicativo móvel, com mapa corporal 3D, busca por pontos e assistente de IA.',
      descriptionEn: 'A mobile reference for acupuncture points, with a 3D body map, point search and an AI assistant.',
      highlightsPt: [
        'Consulta por nome, código ou meridiano e acesso a indicações e localização anatômica.',
        'Arquitetura offline-first com dados locais e sincronização controlada, autenticação Firebase e API em Spring Boot.',
        'Assistente de IA integrado ao Gemini via Spring AI e Vertex AI; backend preparado para deploy no Google Cloud Run.',
      ],
      highlightsEn: [
        'Search by name, code or meridian, with indications and anatomical location.',
        'Offline-first architecture with local data and controlled synchronization, Firebase authentication and a Spring Boot API.',
        'AI assistant integrated with Gemini through Spring AI and Vertex AI; backend configured for deployment on Google Cloud Run.',
      ],
      stack: ['React Native', 'Expo', 'Spring Boot', 'Spring AI', 'Gemini', 'Firebase', 'Google Cloud'],
      images: [
        { src: 'assets/projects/appunture/body-map.jpeg', altPt: 'Mapa corporal 3D do Appunture com pontos de acupuntura', altEn: 'Appunture 3D body map with acupuncture points', captionPt: 'Mapa corporal 3D', captionEn: '3D body map', portrait: true },
        { src: 'assets/projects/appunture/home.jpeg', altPt: 'Tela inicial do aplicativo Appunture', altEn: 'Appunture home screen', captionPt: 'Tela inicial', captionEn: 'Home screen', portrait: true },
        { src: 'assets/projects/appunture/search.jpeg', altPt: 'Busca de pontos de acupuntura no Appunture', altEn: 'Acupuncture point search in Appunture', captionPt: 'Busca de pontos', captionEn: 'Point search', portrait: true },
      ],
      links: [{ label: 'GitHub', url: 'https://github.com/Appunture-2025/appunture-dev' }],
    },
    {
      id: 'flyhigh', number: '03', name: 'FlyHigh',
      categoryPt: 'Microsserviços · projeto acadêmico em equipe', categoryEn: 'Microservices · academic team project',
      descriptionPt: 'Sistema acadêmico de companhia aérea que reúne busca e reserva de voos, milhas e operação de funcionários em uma arquitetura distribuída.',
      descriptionEn: 'Academic airline system bringing together flight search and booking, miles and employee operations in a distributed architecture.',
      highlightsPt: [
        'O frontend em React acessa um API Gateway em Node.js/Express. No backend, microsserviços Spring Boot separam autenticação, clientes, funcionários, voos, reservas e orquestração.',
        'RabbitMQ faz a comunicação por mensagens entre serviços; PostgreSQL e MongoDB armazenam dados de diferentes partes do sistema.',
        'A saga de reserva coordena consulta de milhas, assentos, criação da reserva e débito. Se uma etapa falha, aciona compensações para devolver assentos e, quando necessário, desfazer a reserva.',
        'Docker Compose reúne gateway, microsserviços, RabbitMQ e bancos de dados para executar o ambiente integrado.',
      ],
      highlightsEn: [
        'The React frontend calls a Node.js/Express API Gateway. Spring Boot microservices separate authentication, customers, employees, flights, reservations and orchestration.',
        'RabbitMQ carries messages between services; PostgreSQL and MongoDB store data for different parts of the system.',
        'The booking saga coordinates miles checks, seat allocation, reservation creation and miles debit. If a step fails, compensating actions return seats and, when needed, undo the reservation.',
        'Docker Compose brings up the gateway, microservices, RabbitMQ and databases as one integrated environment.',
      ],
      stack: ['React', 'Spring Boot', 'Node.js', 'RabbitMQ', 'PostgreSQL', 'MongoDB', 'Docker Compose'],
      images: [
        { src: 'assets/projects/flyhigh/checkout.png', altPt: 'Checkout de reserva de voo com opção de usar milhas no FlyHigh', altEn: 'FlyHigh flight checkout with a miles payment option', captionPt: 'Reserva e milhas', captionEn: 'Booking and miles' },
        { src: 'assets/projects/flyhigh/landing.png', altPt: 'Página inicial azul do sistema FlyHigh', altEn: 'Blue FlyHigh landing page', captionPt: 'Página inicial', captionEn: 'Landing page' },
        { src: 'assets/projects/flyhigh/operations.png', altPt: 'Painel do funcionário para operação de voos no FlyHigh', altEn: 'FlyHigh employee dashboard for flight operations', captionPt: 'Painel operacional', captionEn: 'Operations dashboard' },
        { src: 'assets/projects/flyhigh/architecture.svg', altPt: 'Diagrama da arquitetura do FlyHigh com gateway, microsserviços, RabbitMQ e bancos de dados', altEn: 'FlyHigh architecture diagram with gateway, microservices, RabbitMQ and databases', captionPt: 'Arquitetura do backend', captionEn: 'Backend architecture' },
        { src: 'assets/projects/flyhigh/saga.svg', altPt: 'Diagrama da saga de reserva de voo com etapas e compensações', altEn: 'Flight booking saga diagram with steps and compensations', captionPt: 'Saga da reserva', captionEn: 'Booking saga' },
      ],
      links: [{ label: 'GitHub', url: 'https://github.com/DAC-Empresa-Aerea/empresa-aerea' }],
    },
    {
      id: 'maintenance', number: '04', name: 'MaintenanceApp',
      categoryPt: 'Web · projeto acadêmico em equipe', categoryEn: 'Web · academic team project',
      descriptionPt: 'Aplicação web para acompanhar solicitações de manutenção de equipamentos, do registro e orçamento até a finalização.',
      descriptionEn: 'Web application for tracking equipment maintenance requests, from submission and quotes to completion.',
      highlightsPt: [
        'Visões de cliente e funcionário para solicitações, orçamentos e histórico de atendimento.',
        'Cadastro de categorias e funcionários, além de relatórios de receitas com exportação em PDF.',
      ],
      highlightsEn: [
        'Customer and employee views for requests, quotes and service history.',
        'Category and employee management, plus revenue reports with PDF export.',
      ],
      stack: ['Angular', 'Spring Boot', 'Java', 'JPA', 'H2'],
      images: [
        { src: 'assets/projects/maintenance/requests.jpeg', altPt: 'Lista de solicitações de manutenção com status e ações para o cliente', altEn: 'Maintenance requests list with statuses and customer actions', captionPt: 'Solicitações', captionEn: 'Requests' },
        { src: 'assets/projects/maintenance/history.jpeg', altPt: 'Detalhe e histórico de uma solicitação de manutenção', altEn: 'Details and history of a maintenance request', captionPt: 'Histórico do serviço', captionEn: 'Service history' },
        { src: 'assets/projects/maintenance/reports.jpeg', altPt: 'Relatório de receitas por dia no MaintenanceApp', altEn: 'MaintenanceApp daily revenue report', captionPt: 'Relatórios', captionEn: 'Reports' },
      ],
      links: [
        { label: 'Frontend', url: 'https://github.com/UFPR-WEB2/frontend' },
        { label: 'Backend', url: 'https://github.com/UFPR-WEB2/backend' },
      ],
    },
  ];

  private readonly selectedImages: Record<string, number> = {};

  activeIndex(project: PortfolioProject): number {
    return this.selectedImages[project.id] ?? 0;
  }

  activeImage(project: PortfolioProject): ProjectImage {
    return project.images[this.activeIndex(project)];
  }

  selectImage(project: PortfolioProject, index: number): void {
    this.selectedImages[project.id] = index;
  }
}
