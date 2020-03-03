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
    this.punch = function(ninja){ // This method will take another Ninja instance and subtract 5 Health from the Ninja we pass in.
        if(ninja instanceof Ninja){ // Validation. The 'instanceof' operator tests whether the prototype property of a constructor appears anywhere in the prototype chain of an object.
            ninja.health -= 5;
            console.log("Kapow!");
            console.log(`${this.name} punched ${ninja.name}`);
            return this;
        }
        else {return "Wrong ninja!";}
    }

    this.kick = function(ninja) { // This method will take another Ninja instance and subtract 15 Health from the Ninja we pass in.
        if(ninja instanceof Ninja) { // Validation. The 'instanceof' operator tests whether the prototype property of a constructor appears anywhere in the prototype chain of an object.
            ninja.health -= 15;
            console.log("Katchow!");
            console.log(`${this.name} kicked ${ninja.name}`);
            return this;
        }
        else {return "That is not a ninja";}
    }
}

const jhonry = new Ninja("Jhonry"); // we can use the 'new' keyword to create new instances
jhonry.sayName().showStats().drinkSake().showStats();
const blueNinja = new Ninja("Sub-Zero");
const redNinja = new Ninja("Scorpion");
blueNinja.kick(redNinja);
redNinja.punch(blueNinja);
blueNinja.showStats();
redNinja.showStats();







