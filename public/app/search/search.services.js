"use strict()";
angular.module('soundGlomerate.searchFactory', [])

.factory('Search', ['$http', function($http){ // naming the factory 'Search', requiring the $http module to make API calls

  var events = []; 

  var getEventBriteData = function(city, startDate, endDate){ // Defines the getEventBriteData fxn


    angular.copy([], events); // Creates a copy of the search data

    startDate = startDate ? '&start_date.range_start='+startDate : '';
  

    endDate = endDate ? '&start_date.range_end='+endDate : '';
  
    console.log(startDate);
    console.log(endDate);


    return $http({ // the direct API call with the user specificed input as the fxn's parameters
      method: 'GET',
      url: 'https://www.eventbriteapi.com/v3/events/search/?popular=on&sort_by=date&venue.city=' + city + '&venue.region=CA'+startDate+endDate+'&categories=103&expand=venue&token=MD33DX7LJOIGAGCBYRF7'
    })
    .then(function(res){ // this is a promise that waits for the API to return info
        res.data.events.forEach(function(evnt){
          //NOTE: need to take into account when fields are null. Right now, it errors out if one of these fields is null.
          
          // Push each event into the events array for the results to access
          events.push(evnt);
        });
        console.log(events)
        return events
      })
    .catch(function(err){
      console.log(err);
    })
    .finally(function(){
      $q.resolve();
    })

  
  };

  return {
    events: events,
    getEventBriteData: getEventBriteData 
  };

}])

