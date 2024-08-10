class Persona {
  private nombre: string;
  constructor(nombre: string) {
    this.nombre = nombre;
  }
  getNombre(): string {
    return this.nombre;
  }
  static metodoEstatico(): number {
    return 10;
  }
}

class Edad {
  private edad: number;
  constructor(edad: number) {
    this.edad = edad;
  }
  getEdad(): number {
    return this.edad;
  }
}

class Datos {
  private nombre: string;
  private apellido: string;
  private edad: number;
  private cedula: number;
  private correo: string;
  constructor(
    nombre: string,
    apellido: string,
    edad: number,
    cedula: number,
    correo: string
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.cedula = cedula;
    this.correo = correo;
  }
  getNombre(): string {
    return this.nombre;
  }

  getApellido(): string {
    return this.apellido;
  }

  getEdad(): number {
    return this.edad;
  }

  getCedula(): number {
    return this.cedula;
  }

  getCorreo(): string {
    return this.correo;
  }
}

let persona1 = new Persona('Juan');
console.log(persona1.getNombre());
console.log(Persona.metodoEstatico());
let edad1 = new Edad(12);
console.log(edad1.getEdad());
let datos = new Datos(
  'Jordan Michael',
  'Delgado Alonso',
  28,
  1350817597,
  'jordanmichaeldelgado@gmail.com'
);
console.log(datos.getNombre());
console.log(datos.getApellido());
console.log(datos.getEdad());
console.log(datos.getCedula());
console.log(datos.getCorreo());
