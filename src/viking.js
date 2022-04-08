// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health
    this.strength = strength
  }

  attack(){
    return this.strength
  }

  receiveDamage(damage){
    this.health -= damage
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health, strength)
    this.name = name
  }

  attack(){
    super.attack()
    return this.strength
  }

  receiveDamage(damage){
    this.health -= damage
    if(this.health <= 0) return `${this.name} has died in act of combat`
    return `${this.name} has received ${damage} points of damage`
  }

  battleCry(){
    return 'Odin Owns You All!'
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage){
    this.health -= damage
    if(this.health <= 0) return `A Saxon has died in combat`
    return `A Saxon has received ${damage} points of damage`
  }
}

// War
class War {
  vikingArmy = []
  saxonArmy = []

  addViking(Viking){
    this.vikingArmy.push(Viking)
  }

  addSaxon(Saxon){
    this.saxonArmy.push(Saxon)
  }

  vikingAttack(){
    let saxonID = Math.floor(Math.random() * this.saxonArmy.length)
    let vikingID = Math.floor(Math.random() * this.vikingArmy.length)
    let returnMsg = this.saxonArmy[saxonID].receiveDamage(this.vikingArmy[vikingID].strength);

    if(this.saxonArmy[saxonID].health <= 0) this.saxonArmy.splice(saxonID,1)
    return returnMsg;
  }

  saxonAttack(){
    let saxonId = Math.floor(Math.random() * this.saxonArmy.length)
    let vikingId = Math.floor(Math.random() * this.vikingArmy.length)
    
    let message = this.vikingArmy[vikingId].receiveDamage(this.saxonArmy[saxonId].strength)

    if(this.vikingArmy[vikingId].health <= 0) this.vikingArmy.splice(vikingId, 1)
    return message
  }

  showStatus(){
    if (this.saxonArmy.length != 0 && this.vikingArmy.length != 0){
      return "Vikings and Saxons are still in the thick of battle."
    }else if(this.saxonArmy.length === 0){
      return `Vikings have won the war of the century!`
    }else if(this.vikingArmy.length === 0){
      return `Saxons have fought for their lives and survived another day...`
    }
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
