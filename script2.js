class Warrior{
    constructor (life,power){
        this.life = life;
        this.power = power;
    }
    attack() {
        console.log(`El daño realizado es ${this.power}`)
        return this.power
    }

    defend(damage){
        this.life -= damage;
        console.log(`Despues de recibir ${damage} la vida que le queda es ${this.life}`);
    }
}



class Maya extends Warrior {
    constructor(life,power) {
        super(life,power)
    }
    drinkColaCao() {
        this.power += 10
        console.log(`${this.power}`)
    }
}

class Azteca extends Warrior {
    constructor(life,power) {
        super(life,power)
    }
    drinkNesquik() {
        this.life += 10
        console.log(`${this.life}`)
    }
}

let azteca1 = new Azteca (200,30);
let maya1 = new Maya (100,30);
azteca1.drinkNesquik()
maya1.drinkColaCao()
azteca1.defend(maya1.attack())
maya1.defend(azteca1.attack())

// Azteca bebe nesquik
// Maya bebe Cola Cao
// Maya ataca a azteca. Azteca defiende.
// Azteca ataca a maya. Maya defiende.
