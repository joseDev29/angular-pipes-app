import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order',
})
export class OrderPipe implements PipeTransform {
  transform(value: any[], itemOrder: string = 'no-value'): any[] {
    if (!value.length) return [];

    if (itemOrder === 'no-value' || !itemOrder.trim().length) return value;

    if (typeof value[0] === 'object')
      return value.sort((a, b) => (a[itemOrder] > b[itemOrder] ? 1 : -1));

    return value.sort();
  }
}
