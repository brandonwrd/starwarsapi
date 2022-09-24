import { Component, OnInit } from '@angular/core';
import { Planet } from '../types/Planet';
import { PlanetsService } from '../planets.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  planets: Planet[] = [];
  chosenPlanet?: Planet;

  constructor(private planetsService: PlanetsService) { }

  ngOnInit(): void {
    this.getPlanets();
  }

  choosePlanet(planet: Planet): void {
    console.log(planet);
    this.chosenPlanet = planet;
  }

  getPlanets(): void {
    this.planetsService.getPlanets()
      .subscribe(data => {
        console.log(data);
        this.planets = data;
    });
  }
}
