import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

interface ProjectImage {
  src: string;
  altPt: string;
  altEn: string;
  captionPt: string;
  captionEn: string;
  portrait?: boolean;
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
  links?: { label: string; url: string }[];
  privateRepository?: boolean;
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
      id: 'appunture', number: '01', name: 'Appunture',
      categoryPt: 'TCC · aplicativo móvel', categoryEn: 'Degree project · mobile app',
      descriptionPt: 'Consulta de pontos de acupuntura em um aplicativo móvel, com mapa corporal 3D, busca por pontos e assistente de IA.',
      descriptionEn: 'A mobile reference for acupuncture points, with a 3D body map, point search and an AI assistant.',
      highlightsPt: [
        'Consulta por nome, código ou meridiano e acesso a indicações e localização anatômica.',
        'Dados locais com sincronização controlada, autenticação Firebase e API em Spring Boot.',
      ],
      highlightsEn: [
        'Search by name, code or meridian, with indications and anatomical location.',
        'Local data with controlled synchronization, Firebase authentication and a Spring Boot API.',
      ],
      stack: ['React Native', 'Expo', 'Spring Boot', 'Firebase', 'Google Cloud'],
      images: [
        { src: 'assets/projects/appunture/body-map.jpeg', altPt: 'Mapa corporal 3D do Appunture com pontos de acupuntura', altEn: 'Appunture 3D body map with acupuncture points', captionPt: 'Mapa corporal 3D', captionEn: '3D body map', portrait: true },
        { src: 'assets/projects/appunture/home.jpeg', altPt: 'Tela inicial do aplicativo Appunture', altEn: 'Appunture home screen', captionPt: 'Tela inicial', captionEn: 'Home screen', portrait: true },
        { src: 'assets/projects/appunture/search.jpeg', altPt: 'Busca de pontos de acupuntura no Appunture', altEn: 'Acupuncture point search in Appunture', captionPt: 'Busca de pontos', captionEn: 'Point search', portrait: true },
      ],
      privateRepository: true,
    },
    {
      id: 'flyhigh', number: '02', name: 'FlyHigh',
      categoryPt: 'DAC · sistema de companhia aérea', categoryEn: 'Distributed applications · airline system',
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
      id: 'maintenance', number: '03', name: 'MaintenanceApp',
      categoryPt: 'WEB2 · gestão de manutenção', categoryEn: 'Web development · maintenance management',
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
