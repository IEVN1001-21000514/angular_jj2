import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { TablerIconsModule } from 'angular-tabler-icons';

interface cardimgs {
  id: number;
  imgSrc: string;
  title: string;
  routerLink: string;
}

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, TablerIconsModule, MatButtonModule],
  templateUrl: './blog-card.component.html',
})
export class AppBlogCardsComponent {
  constructor(private router: Router) {}

  cardimgs: cardimgs[] = [
    {
      id: 1,
      imgSrc: '/assets/images/products/planilla (1).jpg',
      title: 'Registra aquí los pedidos de sliders para iniciar el proceso de producción',
      routerLink: '/ui-components/registroSliders',
    },
    {
      id: 2,
      imgSrc: '/assets/images/products/planilla.jpg',
      title: 'Registra aquí los sliders y sus defectos encontrados en la producción',
      routerLink: '/ui-components/planillaInspeccion',
    },
    {
      id: 3,
      imgSrc: '/assets/images/products/plan.jpg',
      title: 'Revisa el maestro de producción y actualiza su estatus',
      routerLink: '/ui-components/planProduccion',
    },
  ];

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}