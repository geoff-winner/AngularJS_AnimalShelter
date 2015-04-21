animalsList.controller('AnimalCtrl', function AnimalCtrl($scope, ShelterFactory) {
  $scope.animals = ShelterFactory.animals;
  $scope.ShelterFactory = ShelterFactory;
});
