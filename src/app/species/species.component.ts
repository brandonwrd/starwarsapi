import { Component, OnInit } from '@angular/core';
import { Species } from '../Species';
import { SpeciesService } from '../species.service';


@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {
  species: Species[] = [];
  chosenSpecies?: Species;

  constructor(private speciesService: SpeciesService) { }

  ngOnInit(): void {
    this.getSpecies();
  }

  chooseSpecies(types: Species): void {
    console.log(types);
    this.chosenSpecies = types;
  }

  getSpecies(): void {
    this.speciesService.getSpecies()
      .subscribe(data => {
        console.log(data);
        this.species = data;
    });
  }
}
