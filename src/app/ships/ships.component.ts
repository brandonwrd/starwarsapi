import { Component, OnInit } from '@angular/core';
import { Ship } from '../Ship';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit {
  ships: Ship[] = [];

  constructor() { }

  ngOnInit(): void {
    this.ships = [];
      
  }
}
