import { Component, OnInit } from '@angular/core';
import { IVehicle } from '../../interfaces/ivehicle';
import { VehicleService } from '../../services/vehicle.service';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-vehicle-search',
  templateUrl: './vehicle-search.component.html',
  styleUrls: ['./vehicle-search.component.css']
})

export class VehicleSearchComponent implements OnInit {
  title = 'Vehicle Search';
  vehicles: IVehicle[];
  constructor( 
    private vehicleService : VehicleService
  ) {}

  getVehicles(): void{
    this.vehicleService.getVehicles().map(response => this.vehicles = response.json().data as IVehicle[]);
  }

  ngOnInit() { 
    this.getVehicles();
  }

}
