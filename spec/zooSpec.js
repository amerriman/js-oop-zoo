//Brings in two files - why does one have var, and one not?  Is this janky?
var Animal = require('../src/animal.js'),
Zoo = require('../src/zoo.js');

var animal;
var zoo;

describe('Zoo', function(){

  beforeEach(function(){
    zoo = new Zoo("Bronx","NYC");
    pig = new Animal("Babe",10,"Pig");
    lion = new Animal("Snoop",10,"lion");
  });

  describe('#changeLocation', function(){
    it('should change locations', function(){
      zoo.changeLocation("Denver");
      expect(zoo.location).toEqual("Denver");
    });
  });

  describe('#open', function(){
    it('should change status to open', function(){
      zoo.open();
      expect(zoo.status).toBe("open");
    });
  });


  describe('#isOpen', function(){
    it('should see if the zoo is open', function(){
      zoo.open();
      zoo.isOpen();
      expect(zoo.status).toEqual("open");
    });
    it('should see if the zoo is closed', function(){
      zoo.close();
      zoo.isOpen();
      expect(zoo.status).toEqual("closed");
    });
  });

  describe('#animals', function(){
    it('should initially be empty', function(){
      expect(zoo.animals).toEqual([]);
    });
  });


  describe('#addAnimal', function(){
    it('should only add an animal to the animals array when the zoo is open', function(){
      zoo.open();
      expect(zoo.status).toEqual("open");
    });
    it('should add an animal to the animals array', function(){
      zoo.open();
      zoo.addAnimal(pig);
      expect(zoo.animals.length).toBe(1);

      expect(zoo.animals[0].name).toBe("Babe");
    });
    it('should only add instances of animals', function(){
      expect(pig instanceof Animal).toBe(true);
    });

    it('should not add duplicates', function(){
      expect(zoo.animals.indexOf(pig)).toBe(-1);
    });
  });

  describe('#removeAnimal', function(){
    it('should remove an animal from the animals array if the zoo is open', function(){
      zoo.open();
      zoo.addAnimal(lion);
      zoo.addAnimal(pig);
      zoo.removeAnimal(zoo.animals, lion);
      expect(zoo.animals.length).toEqual(1);
    });
  });
});


