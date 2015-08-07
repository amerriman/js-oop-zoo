//requires the animal file - why do we not need the .js at the end?
var Animal = require("./animal");

function Zoo(name, location, status, animals){
  this.name = name;
  this.location = location;
  this.status = "closed";
  this.animals = [];
}

//changes the location of the zoo
Zoo.prototype.changeLocation = function(newLocation){
  this.location = newLocation;
};

//opens the zoo
Zoo.prototype.open = function(){
  this.status = "open";
};

//closes the zoo
Zoo.prototype.close = function(){
  this.status = "closed";
};

//tells you whether to zoo is open or closed
Zoo.prototype.isOpen = function(){
  if (this.status === "open"){
    return "Open!";
  }
  else {
    return "Closed!";
  }
};

//adds animal to the zoo as long as the zoo is open, and the animal is an instance of the Animal class, and it's not already in the zoo.
Zoo.prototype.addAnimal = function(animal){
  if (this.status === "open" && animal instanceof Animal === true && this.animals.indexOf(animal) === -1){
    this.animals.push(animal);
  }
};

//removes an animal from the zoo
Zoo.prototype.removeAnimal = function(animalArray, animal){
  if (this.status === 'open'){
    for (i = 0; i< animalArray.length; i++){
      if (animal === animalArray[i]){
        animalArray.splice(animalArray[i], 1);
      }
    }
  }
  return animalArray;
};



module.exports = Zoo;
