import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customUppercase',
})
export class CustomUppercasePipe implements PipeTransform {
  transform(value: string, type: boolean = true): string {
    if (type) {
      return value.toUpperCase();
    }

    return value.toLowerCase();
  }
}
