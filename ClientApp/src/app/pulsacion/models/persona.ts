export class Persona {
    identificacion: string;
    nombre: string;
    sexo: string;
    edad: number;
    pulsacion: number;
calcularPulsacion(){
this.sexo.toUpperCase()==='M'?this.pulsacion= (210 - this.edad) / 10:this.pulsacion= (220 - this.edad) / 10
}

}
