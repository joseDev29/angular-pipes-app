import { Component } from '@angular/core';

import { interval } from 'rxjs';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styles: [],
})
export class NoCommonsComponent {
  //i18nSelect
  name: string = 'Mikasa';
  gender: string = 'femenino';

  invitationMap = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
    other: 'invitarte',
  };

  //i18nPlural
  clients: string[] = ['Maria', 'Pepe', 'Lucho'];

  clientsMap = {
    '=0': 'no tenemos ningun cliente',
    '=1': 'tenemos un cliente',
    other: `tenemos # clientes`,
  };

  onChangeGender() {
    if (this.gender === 'femenino') {
      this.gender = 'masculino';
      this.name = 'Eren';
    } else {
      this.gender = 'femenino';
      this.name = 'Mikasa';
    }
  }

  onSetUnisex() {
    this.gender = 'unisex';
    this.name = 'Mariano';
  }

  onDeleteClient() {
    this.clients.pop();
  }

  onRestoreClients() {
    this.clients = ['Maria', 'Pepe', 'Lucho'];
  }

  //Key Value Pipe
  person = {
    name: 'Erwin Smith',
    edad: 35,
    address: 'Eldia',
  };

  //JSON Pipe
  hunters = [
    {
      name: 'Kaito',
      power: 'Crazy slots',
    },
    {
      name: 'Gon',
      power: 'Ja Jan Ken',
    },
    {
      name: 'Killua',
      power: ['Narukami', 'Good speed'],
    },
    {
      name: 'Hisoka',
      power: 'Bungee gum',
    },
  ];

  //Async Pipe
  myObservable = interval(1000);

  promiseValue = new Promise((res, rej) => {
    setTimeout(() => {
      res('Promesa resuelta!!!');
    }, 5000);
  });
}
