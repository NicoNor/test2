var groceryList = angular.module('groceryList', []);

 groceryList.controller('groceryControl', function($scope) {
   $scope.itemName;
   $scope.groceries = ['Bananas', 'Eggs','Yogurt'];

  $scope.addItem = function(){
  $scope.groceries.push($scope.itemName);
  $scope.itemName ='';
}

  $scope.deleteItem = function(deletedItem){
    var index = $scope.groceries.indexOf(deletedItem);
    $scope.groceries.splice(index,1);
  }
});
