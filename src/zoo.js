var Animal = require("./animal");

function Zoo(name, location, status, animals){
  this.name = name;
  this.location = location;
  this.status = "closed";
  this.animals = [];
}

Zoo.prototype.changeLocation = function(newLocation){
  this.location = newLocation;
  return newLocation;
};

Zoo.prototype.open = function(){
  this.status = "open";
  return this.status;
};

Zoo.prototype.close = function(){
  this.status = "closed";
  return this.status;
};

Zoo.prototype.isOpen = function(){
  if (this.status === "open"){
    return "Open!";
  }
  else {
    return "Closed!";
  }
};

Zoo.prototype.addAnimal = function(animal){
  console.log(this.animals);
  console.log(this.status)
  console.log(this.animals.indexOf(animal))
  console.log(animal instanceof Animal)
  if (this.status === "open" && animal instanceof Animal === true && this.animals.indexOf(animal) === -1){

    this.animals.push(animal);
  }
    console.log(this.animals);

  return this.animals;
};

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
