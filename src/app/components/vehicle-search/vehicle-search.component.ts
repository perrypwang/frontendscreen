import { Component, OnInit } from '@angular/core';
import { IVehicle } from '../../interfaces/ivehicle';

@Component({
  selector: 'app-vehicle-search',
  templateUrl: './vehicle-search.component.html',
  styleUrls: ['./vehicle-search.component.css']
})
export class VehicleSearchComponent implements OnInit {
  title = 'Vehicle Search';
  vehicles: IVehicle[];
  constructor( ) { }

  ngOnInit() { }

}
