
app.controller("controller", function($scope) {
    

$scope.alcohollimit = 5;
$scope.alcoholconsumed = 0;

$scope.taxi = "";
$scope.alcoholstate = "not sure"

$scope.update = function checkfordrinks(drinks)
{  
    if(drinks > 0 && drinks < 2)
    {   $scope.taxi = "you should call a taxi";
        $scope.alcoholstate = "tippsy";
    } 
    else if(drinks == 2 || drinks > 2 )
    {
        $scope.taxi = "Taxi on route";
        $scope.alcoholstate = "locked";
    }
    else{
          $scope.alcoholstate = "sobar";
    }
}

$scope.canceltaxi = function canceltaxi()
{
    $scope.taxi = "Taxi cancelled";
    $scope.alcoholstate == "Too drunk too care";
}



// $scope.$watch('alcoholstate', function(newValue) {
//  if(newValue)
//  {
     
     
//  }
       
        
// });

    
});
