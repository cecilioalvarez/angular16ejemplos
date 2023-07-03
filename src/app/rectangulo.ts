export class Rectangulo {

    lado1:number;
    lado2:number;

    constructor(lado1:number,lado2:number) {

        this.lado1=lado1;
        this.lado2=lado2;
    }

    area() {
        return this.lado1*this.lado2;
    }
}
