animalsList.controller('AdoptedCtrl', function AdoptedCtrl($scope, ShelterFactory) {
  $scope.animals = ShelterFactory.animals;
  $scope.addAdoptedAnimal = function(animal) {
    animal.adopted = true;
  };
});
