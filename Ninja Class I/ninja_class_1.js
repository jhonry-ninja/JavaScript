function Ninja (name) { // functions act as Object Constructors, or blueprints for creating particular objects.
    this.name = name; // we can use the 'this' keyword to store our attributes and methods
    this.health = 100; // second attribute
    let speed = 3; // third attribute
    let strength = 3; // fourth attribute

    this.sayName = function() { // method sayName() logs Ninja's name to the console
        console.log("My name is "+this.name+"!");
      return this;
    }
    this.getSpeed = function() {
        return speed;
    }
    this.getStrength = function () {
        return strength;
    }
    this.showStats = function() { // method showStats() shows Ninja's name, strength, speed, and health to the console
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + this.getSpeed() + ", Strength: " + this.getStrength());
        return this;
    }
    this.drinkSake = function() { // method drinkSake() adds 10 to Ninja's health
        this.health += 10;
        console.log("Sake, sake!")
        return this;
    }
}
const jhonry = new Ninja("Jhonry"); // we can use the 'new' keyword to create new instances
jhonry.sayName().showStats().drinkSake().showStats();