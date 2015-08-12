function Animal(name, age, kind, awake){
  this.name = name;
  this.age = age;
  this.kind = kind;
  this.awake = false;
}

//if the animal is a pig, it will oink, otherwise it will tell you it's not a pig
Animal.prototype.oink = function(){
  if (this.kind === 'Pig'){
    return 'oink';
  } else {
    return "I'm not a pig";
  }
};

//increase the age of the animal by one year
Animal.prototype.growUp = function(){
  this.age = this.age+1;
};

//feed the animal if it's awake, but if it's sleeping it will tell you to go away
Animal.prototype.feed = function(){
  if (this.awake === true){
    return "NOM NOM NOM";
  }
  else {
    return "Go away, I'm sleeping!";
  }
};

//wake the animal up
Animal.prototype.wakeUp = function(){
  this.awake = true;
};

//put the animal to sleep
Animal.prototype.sleep = function(){
  this.awake = false;
};

module.exports = Animal;
