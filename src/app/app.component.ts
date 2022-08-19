import { BoundTarget } from '@angular/compiler';
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
  tropical_destinations = [
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
  ]
  hot_destinations = [
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
  ]
  cold_destinations = [
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

  constructor() {
    console.log("Iniating angular AppCompnent class");
  }


  onSendMessage() {
    this.name = this.calculateDestination(this.budget, this.weather);
  }
  calculateDestination(budget:number, weather:string){ 
    let name = "Staycation";
    switch(weather) {
      case "tropical": {
        for (let x=this.tropical_destinations.length-1; x>=0; x--) {
          if (this.tropical_destinations[x].budget <= budget) {
            name = this.tropical_destinations[x].name;
          }
        }
        break;
      }
      case "hot": {
        for (let x=this.hot_destinations.length-1; x>=0; x--) {
          if (this.hot_destinations[x].budget <= budget) {
            name = this.hot_destinations[x].name;
          }
        }
        break;
      }
      case "cold": {
        for (let x=this.cold_destinations.length-1; x>=0; x--) {
          if (this.cold_destinations[x].budget <= budget) {
            name = this.cold_destinations[x].name;
          }
        }
        break;
      }
    }
    return name;
  }
}
