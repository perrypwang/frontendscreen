import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import {Observable} from 'rxjs/Observable';
import {IVehicle} from '../../interfaces/ivehicle';

@Component({
  selector: 'app-vehicle-search',
  templateUrl: './vehicle-search.component.html',
  styleUrls: ['./vehicle-search.component.css'],
  providers: [VehicleService]
})
export class VehicleSearchComponent implements OnInit {
  title = 'Vehicle Search';
  vehicles: Observable<IVehicle[]>;
  errorMessage: string;
  constructor( private vehicleService: VehicleService ) { }

  ngOnInit() {
    this.vehicles = this.vehicleService.getVehicles();
  }

}
