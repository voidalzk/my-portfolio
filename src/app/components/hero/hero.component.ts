import { Component, OnInit } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  isDarkTheme = false;
  isDark$: Observable<boolean>;

  // Apenas um array com posições para todos os ícones
  iconPositions = [
    { top: '15%', left: '10%', size: '80px', delay: '0s', duration: '8s' },
    { top: '25%', right: '5%', size: '120px', delay: '0.5s', duration: '10s' },
    { top: '85%', left: '20%', size: '100px', delay: '1s', duration: '9s' },
    { top: '70%', right: '10%', size: '70px', delay: '1.5s', duration: '7s' },
    { top: '40%', left: '5%', size: '60px', delay: '2s', duration: '11s' },
    { top: '30%', right: '25%', size: '50px', delay: '2.5s', duration: '9.5s' },
    { top: '50%', left: '30%', size: '90px', delay: '3s', duration: '8.5s' },
    { top: '80%', right: '20%', size: '110px', delay: '3.5s', duration: '10.5s' },
    { top: '60%', left: '50%', size: '130px', delay: '4s', duration: '12s' },
    { top: '20%', right: '30%', size: '140px', delay: '4.5s', duration: '6s' },
    { top: '10%', left: '40%', size: '150px', delay: '5s', duration: '7.5s' },
  ];

  constructor(private themeService: ThemeService) {
    this.isDark$ = this.themeService.isDark();

    // E mantenha sua inscrição existente
    this.isDark$.subscribe((isDark) => {
      this.isDarkTheme = isDark;
    });
  }

  ngOnInit() {
    // O ngOnInit pode ficar vazio se a inicialização já foi feita no constructor
  }
}
