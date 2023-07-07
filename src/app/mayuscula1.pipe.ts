import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayuscula1'
})
export class Mayuscula1Pipe implements PipeTransform {

  transform(textoentrada: string): string {
    return textoentrada.substring(0,1).toUpperCase()+textoentrada.substring(1,textoentrada.length);
  }

}
