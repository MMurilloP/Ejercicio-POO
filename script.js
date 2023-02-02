console.log("*** EJERCICIO 1 ***")
/*Ejercicio POO 1
Crear la clase Persona, con propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.*/

class Persona{
    constructor (nombre,edad,genero){
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    obtDetalles() {
        console.log(`Esta persona se llama ${this.nombre} tiene ${this.edad} años y su sexo es ${this.genero}`)
    }
}

let miPersona = new Persona ("Manuel", 36, "masculino");

miPersona.obtDetalles()


/*Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(), que muestre por pantalla el resultado.*/

class Estudiante extends Persona {
    constructor(nombre,edad,genero,curso,grupo){
        super(nombre,edad,genero)
        this.curso = curso;
        this.grupo = grupo;
    }
    registrar() {
        console.log(`Esta persona se llama ${this.nombre} tiene ${this.edad} años y su sexo es ${this.genero} esta matriculada en el curso: ${this.curso} en el grupo: ${this.grupo}`)
    }
}

let miEstudiante = new Estudiante ("Manuel", 36, "masculino","2º","B");

miEstudiante.registrar()


/*Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(), que muestre por pantalla el resultado.*/

class Profesor extends Persona {
    constructor(nombre,edad,genero,asignatura,nivel){
        super(nombre,edad,genero)
        this.asignatura = asignatura;
        this.nivel = nivel;
    }
    asignar() {
        console.log(`Esta persona se llama ${this.nombre} tiene ${this.edad} años y su sexo es ${this.genero} es profesor de la asignatura ${this.asignatura} en el nivel ${this.nivel}`)
    }
}

let miProfesor = new Profesor ("Manuel", 36, "masculino","Biologia","4º");

miProfesor.asignar()





