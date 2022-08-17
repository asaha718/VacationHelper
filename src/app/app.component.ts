import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VacationHelper';
  name = ""; 
// budget variable
  budget = 0 ; 
// weather variable
  weather = "any"; 

  // List of Destinations with name, temperature and price range
  destinations = [
    { 
      name: "Cancun",
      budget: 1500, 
      weather: "tropical"
    }, 
    { 
      name: "Honolulu", 
      budget: 2500, 
      weather: "tropical"
    }, 
    { 
      name: "Grand Canyon", 
      budget: 800, 
      weather: "hot"
    }, 
    { 
      name: "Cairo", 
      budget: 3000, 
      weather: "hot"
    }, 
    { 
      name: "Nuuk", 
      budget: 1500, 
      weather: "cold"
    }, 
    { 
      name: "Denali National Park", 
      budget: 1800, 
      weather: "cold"
    }, 
  ]

  showDestinations(){ 
    //filter names of destinations and show user
  }

}
