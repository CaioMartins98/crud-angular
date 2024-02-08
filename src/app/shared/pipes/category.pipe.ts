import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    const valueLoweCase = value.toLowerCase()
    switch (valueLoweCase) {
      case 'front-end': return 'code'
      case 'back-end': return 'terminal'
    }
    return 'code'

  }

}
