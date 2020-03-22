function searchForUser() {
    // get what user typed in search bar
    var searchBarData = document.getElementById('search-bar-data').value;
    
    // make call to SWAPI with the data the user typed and see what SWAPI says
    var client = new HttpClient();
    client.get(`https://swapi.co/api/people/?search=${searchBarData}`, (response) => {
        console.log(response);

        // here we have all the data returned from swapi
        // it is an object with a key = results and a value = []
        // if the array is empty, no results
        // if the array is not empty, then we need to go through the array and pull out important info we care about to display on the results screen
        var swapiData = response;
        console.log(swapiData["results"]);
        if(swapiData["count"]<0){
            console.log('sdshd');
       var name = swapiData.results[0].name
       var height = swapiData.results[0].height
       var mass = swapiData.results[0].mass
       var gender = swapiData.results[0].gender
       var skincolor = swapiData.results[0].skin_color
       var homeworld = swapiData.results[0].homeworld

       console.log(name, height, mass, gender, skincolor, homeworld);
        }
        // pull out into variables, the important attributes you care about from results

    });
}

// reusable code to make a http call (from internet)
var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send( null );
    }
}
