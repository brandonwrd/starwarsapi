import { Injectable } from '@angular/core';
import { Ship } from './types/Ship';

@Injectable({
  providedIn: 'root'
})
export class ShipsServiceService {

  constructor() { }

  getShips(): Ship[] {
    return [
      {
        "name": "CR90 corvette",
        "model": "CR90 corvette",
        "manufacturer": "Corellian Engineering Corporation",
        "cost_in_credits": "3500000",
        "length": "150",
        "max_atmosphering_speed": "950",
        "crew": "30-165",
        "passengers": "600",
        "cargo_capacity": "3000000",
        "consumables": "1 year",
        "hyperdrive_rating": "2.0",
        "MGLT": "60",
        "starship_class": "corvette",
        "pilots": [],
        "films": [
          "https://swapi.dev/api/films/1/",
          "https://swapi.dev/api/films/3/",
          "https://swapi.dev/api/films/6/"
        ],
        "created": "2014-12-10T14:20:33.369000Z",
        "edited": "2014-12-20T21:23:49.867000Z",
        "url": "https://swapi.dev/api/starships/2/"
      },
      {
        "name": "Sentinel-class landing craft",
        "model": "Sentinel-class landing craft",
        "manufacturer": "Sienar Fleet Systems, Cyngus Spaceworks",
        "cost_in_credits": "240000",
        "length": "38",
        "max_atmosphering_speed": "1000",
        "crew": "5",
        "passengers": "75",
        "cargo_capacity": "180000",
        "consumables": "1 month",
        "hyperdrive_rating": "1.0",
        "MGLT": "70",
        "starship_class": "landing craft",
        "pilots": [],
        "films": [
          "https://swapi.dev/api/films/1/"
        ],
        "created": "2014-12-10T15:48:00.586000Z",
        "edited": "2014-12-20T21:23:49.873000Z",
        "url": "https://swapi.dev/api/starships/5/"
      },
      {
        "name": "Death Star",
        "model": "DS-1 Orbital Battle Station",
        "manufacturer": "Imperial Department of Military Research, Sienar Fleet Systems",
        "cost_in_credits": "1000000000000",
        "length": "120000",
        "max_atmosphering_speed": "n/a",
        "crew": "342,953",
        "passengers": "843,342",
        "cargo_capacity": "1000000000000",
        "consumables": "3 years",
        "hyperdrive_rating": "4.0",
        "MGLT": "10",
        "starship_class": "Deep Space Mobile Battlestation",
        "pilots": [],
        "films": [
          "https://swapi.dev/api/films/1/"
        ],
        "created": "2014-12-10T16:36:50.509000Z",
        "edited": "2014-12-20T21:26:24.783000Z",
        "url": "https://swapi.dev/api/starships/9/"
      },
    ]
  }
}
