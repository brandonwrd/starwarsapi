export interface Ship {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    hyperdrive_rating: string;
    MGLT: string;
    starship_class: string;
    pilots: any[];
    films: string[];
    created: string;
    edited: string;
    url: string;
  }

export interface ShipResponse {
    count: string;
    next: string;
    previous: string;
    results: Ship[];

}

/*
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
*/