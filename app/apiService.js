app.service('apiService', ['$http','$q', apiService]);

  function apiService($http,$q){

    var SearchEndpoint = 'http://localhost:8000/taxirequest/ ';
    

    return {
       taxiRequest : function() {
         
         return "Taxi on route";
        // return $http.get(SearchEndpoint).then(function successCallback(response) {
          
        //   console.log(response);
          
        //    return response;

        // }, function errorCallback(response) {
        //    return response;
        // }
        
        //);

      },
    };
  };