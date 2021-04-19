import { Component } from '@angular/core';
import { Team, Titan } from '../../interfaces/sales.interfaces';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [],
})
export class OrderComponent {
  caseType: boolean = true;
  titans: Titan[] = [
    {
      name: 'Eren',
      lastname: 'Jager',
      titan: 'Fundador',
      team: true,
    },
    {
      name: 'Eren',
      lastname: 'Jager',
      titan: 'Ataque',
      team: true,
    },
    {
      name: 'Lara',
      lastname: 'Tybur',
      titan: 'Martillo de Guerra',
      team: false,
    },
    {
      name: 'Annie',
      lastname: 'Leonhart',
      titan: 'Hembra',
      team: false,
    },
    {
      name: 'Reiner',
      lastname: 'Braun',
      titan: 'Acorazado',
      team: false,
    },
    {
      name: 'Porko',
      lastname: 'Galliard',
      titan: 'Mandibula',
      team: false,
    },
    {
      name: 'Pieck',
      lastname: 'Finger',
      titan: 'Carguero',
      team: false,
    },
    {
      name: 'Armin',
      lastname: 'Arlert',
      titan: 'Colosal',
      team: true,
    },
    {
      name: 'Zeke',
      lastname: 'Jeager',
      titan: 'Bestia',
      team: false,
    },
  ];

  orderItem: string = 'name';

  constructor() {}

  changeType() {
    this.caseType ? (this.caseType = false) : (this.caseType = true);
  }

  changeOrder(orderType: string) {
    this.orderItem = orderType.trim();
  }
}
