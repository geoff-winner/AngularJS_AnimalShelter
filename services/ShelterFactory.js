animalsList.factory('ShelterFactory', function ShelterFactory(){
  var factory = {};
  factory.animals = [];

  factory.addAnimal = function() {
    var animal = { name: factory.animalName, type: factory.animalType, adopted: false };
    factory.animals.push(animal);
    factory.animalName = null;
    factory.animalType = null;
  };

  factory.deleteAnimal = function(animal) {
    var index = factory.animals.indexOf(animal);
    factory.animals.splice(index, 1);
  };
  return factory;
});
