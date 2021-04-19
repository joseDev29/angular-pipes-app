import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [],
})
export class BasicsComponent {
  lowerName: string = 'mikasa';
  upperName: string = 'MIKASA';
  completeName: string = 'MiKaSA ackerMAN';
  date: Date = new Date();
}
