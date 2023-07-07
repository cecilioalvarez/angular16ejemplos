import { Profesion } from "./profesion";

export class Persona {
    //constructor class expresion
    constructor(public nombre:string,public apellidos:string,public edad:number,public fechaNacimiento?:Date,public profesion?:Profesion) {

    }
}
