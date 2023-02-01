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


// MAYAS Y AZTECAS

class Warrior{
    constructor (life,power){
        this.life = life;
        this.power = power;
    }
    attack() {
        console.log(`El daño realizado es de ${this.power}`)
    }
    defend(damage){
        let daño = this.life - damage
        console.log(`Despues de recibir ${damage} de daño la vida es de ${daño}`)
    }
}

let warrio1 = new Warrior (200, 30);

// warrio1.defend(30)

class Maya extends Warrior {
    constructor(life,power) {
        super(life,power)
    }
    drinkColaCao() {
        this.life += 10
        console.log(`Vida aumenta a ${this.life}`)
    }
}

let maya1 = new Maya (200,30);
maya1.drinkColaCao()

class Azteca extends Warrior {
    constructor(life,power,) {
        super(life,power)
    }
    drinkNesquik() {
        this.life += 10
        console.log(`Vida aumenta a ${this.life}`)
    }
}

let azteca1 = new Azteca (200,30);
azteca1.drinkNesquik()

console.log("*** COMIENZA LA BATALLA ***")
console.log("EL Azteca bebe Nesquik, aumentado su vida hasta: ")
azteca1.drinkNesquik()

console.log("EL Maya bebe Nesquik, aumentado su vida hasta: ")
maya1.drinkColaCao()

console.log("Maya ataca a Azteca")
maya1.attack()
// console.log("El Azteca recibe 30 de daño y su vida se queda en: ")
azteca1.defend(30)

console.log("Azteca ataca a Maya")
azteca1.attack()

// console.log("El Maya recibe 30 de daño y su vida se queda en: ")
maya1.defend(30)




