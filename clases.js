"use strict";
var Persona = /** @class */ (function () {
    function Persona(nombre) {
        this.nombre = nombre;
    }
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.metodoEstatico = function () {
        return 10;
    };
    return Persona;
}());
var Edad = /** @class */ (function () {
    function Edad(edad) {
        this.edad = edad;
    }
    Edad.prototype.getEdad = function () {
        return this.edad;
    };
    return Edad;
}());
var Datos = /** @class */ (function () {
    function Datos(nombre, apellido, edad, cedula, correo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.cedula = cedula;
        this.correo = correo;
    }
    Datos.prototype.getNombre = function () {
        return this.nombre;
    };
    Datos.prototype.getApellido = function () {
        return this.apellido;
    };
    Datos.prototype.getEdad = function () {
        return this.edad;
    };
    Datos.prototype.getCedula = function () {
        return this.cedula;
    };
    Datos.prototype.getCorreo = function () {
        return this.correo;
    };
    return Datos;
}());
var persona1 = new Persona('Juan');
console.log(persona1.getNombre());
console.log(Persona.metodoEstatico());
var edad1 = new Edad(12);
console.log(edad1.getEdad());
var datos = new Datos('Jordan Michael', 'Delgado Alonso', 28, 1350817597, 'jordanmichaeldelgado@gmail.com');
console.log(datos.getNombre());
console.log(datos.getApellido());
console.log(datos.getEdad());
console.log(datos.getCedula());
console.log(datos.getCorreo());
