const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const getRandomInt = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);

const dragonDamage = () => getRandomInt(15, dragon.strength);

const warriorDamage = () => getRandomInt(warrior.strength, warrior.strength * warrior.weaponDmg);

const mageDamage = () => {
  let object = { damage: 0, mana: 0 };
  object.damage = getRandomInt(mage.intelligence, mage.intelligence * 2);
  if (mage.mana < 15) {
    object.damage = 'Não possui mana suficiente';
    object.mana = 0
  } else {
    object.mana = 15
  }

  return object
}

const gameActions = {
  warriorTurn: (func) => {
    console.log('warriorTurn chammada');
    const warriorDmg = func();
    dragon.healthPoints -= warriorDmg;
    warrior.damage = warriorDmg;
  },
  
  mageTurn: (func) => {
    console.log('mageTurn chammada');
    const mageDmg = func();
    mage.damage = mageDmg.damage;
    mage.mana -= mageDmg.mana;
    dragon.healthPoints -= mageDmg.damage;
  },
  
  dragonTurn: (func) => {
    console.log('dragonTurn chammada');
    const dragonDmg = func();
    dragon.damage = dragonDmg;
    mage.healthPoints -= dragonDmg;
    warrior.healthPoints -= dragonDmg;
  }

}

console.log(battleMembers);
gameActions.warriorTurn(warriorDamage);
console.log(battleMembers);
gameActions.dragonTurn(dragonDamage);
console.log(battleMembers);
gameActions.mageTurn(mageDamage);
console.log(battleMembers);

console.log(battleMembers);
gameActions.warriorTurn(warriorDamage);
console.log(battleMembers);
gameActions.dragonTurn(dragonDamage);
console.log(battleMembers);
gameActions.mageTurn(mageDamage);
console.log(battleMembers);

console.log(battleMembers);
gameActions.warriorTurn(warriorDamage);
console.log(battleMembers);
gameActions.dragonTurn(dragonDamage);
console.log(battleMembers);
gameActions.mageTurn(mageDamage);
console.log(battleMembers);