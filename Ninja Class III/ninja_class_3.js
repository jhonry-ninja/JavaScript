class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() { // This should log that Ninja's name to the console.
        console.log("My name is "+this.name+"!");
        return this;
    }
    getSpeed() {
        return this.speed;
    }
    getStrength () {
        return this.strength;
    }
    showStats() { // This should show the Ninja's name, strength, speed, and health.
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + this.getSpeed() + ", Strength: " + this.getStrength());
        return this;
    }
    drinkSake() { // This should add +10 health to the Ninja.
        this.health += 10;
        console.log("Sake, sake!")
        this.showStats();
        return this;
    }
    punch(ninja) {
        if(ninja instanceof Ninja) {
            ninja.health -= 5;
            console.log("Kapow!");
            console.log(`${this.name} punched ${ninja.name}`);
            console.log(`${ninja.name}'s health is now ${ninja.health}`);
            return this;
        }
        else {return "Wrong ninja!";}
    }
    kick(ninja) {
        if(ninja instanceof Ninja) {
            ninja.health -= 15;
            console.log("Katchow kick!!!");
            console.log(`${this.name} kicked ${ninja.name}`);
            console.log(`${ninja.name}'s health is now ${ninja.health}`);
            return this;
        }
        else {return "Wrong ninja! is not a ninja";}
    }
}
const jhonry = new Ninja("Jhonry");
jhonry.sayName().showStats().drinkSake();
const blueNinja = new Ninja("Zero");
const redNinja = new Ninja("Bill Scorpion");
blueNinja.kick(redNinja);
redNinja.punch(blueNinja);

class Sensei extends Ninja{
    constructor(name) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom() { // new attribute called Wisdom
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
    showStats() { // // new attribute called Stats
        const message = super.showStats();
    }
    
}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();