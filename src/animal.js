function Animal(name, age, kind, awake){
  this.name = name;
  this.age = age;
  this.kind = kind;
  this.awake = false;
}

Animal.prototype.oink = function(){
  if (this.kind === 'Pig'){
    return 'oink';
  } else {
    return "I'm not a pig";
  }
};

Animal.prototype.growUp = function(){
  this.age = this.age+1;
  //return this.age;
};

Animal.prototype.feed = function(){
  if (this.awake === true){
    return "NOM NOM NOM";
  }
  else {
    return "Go away, I'm sleeping!";
  }
};

Animal.prototype.wakeUp = function(){
  if (this.awake === false){
    this.awake = true;
  }
  //return this.awake;
};

Animal.prototype.sleep = function(){
 if (this.awake === true){
    this.awake = false;
  }
  //return this.awake;
};

module.exports = Animal;
