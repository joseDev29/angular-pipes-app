import { Pipe, PipeTransform } from '@angular/core';
import { Team } from '../interfaces/sales.interfaces';

@Pipe({
  name: 'teamPipe',
})
export class TeamPipe implements PipeTransform {
  transform(value: boolean) {
    return value ? Team.Eldia : Team.Marley;
  }
}
