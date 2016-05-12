
app.controller('controller', ['$scope', 'apiService', function($scope, apiService) {

$scope.alcohollimit = 5;
$scope.alcoholconsumed = 0;

$scope.taxi = "";
$scope.alcoholstate = "not sure"


$scope.check = function (drinks)
{  
    console.log(drinks);
    
    
    if(drinks > 0 && drinks < 2)
    {   $scope.taxi = "you should call a taxi";
        $scope.alcoholstate = "tippsy";
    } 
    else if(drinks == 2 || drinks > 2 )
    {
        $scope.taxi = "Taxi on route";
        $scope.alcoholstate = "locked";
        
        var result = apiService.taxiRequest();
       

         //console.log(result);
    }
    else{
          $scope.alcoholstate = "sobar";
    }
}

$scope.canceltaxi = function()
{
    $scope.taxi = "Taxi cancelled";
    $scope.alcoholstate == "Too drunk too care";
}

$scope.test = function () {
    alert();
}








}]);




