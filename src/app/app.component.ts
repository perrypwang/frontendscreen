import { Component, OnInit  } from '@angular/core';
import { VehicleService } from './services/vehicle.service';
import {Observable} from 'rxjs/Observable';
import {IVehicle} from './interfaces/ivehicle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [VehicleService]
})
export class AppComponent implements OnInit {
  title = 'Front-End Screen';
  vehicles: Observable<IVehicle[]>;
  errorMessage: string;

  constructor( private vehicleService: VehicleService ) {
  }

  ngOnInit(): void {
    this.vehicles = this.vehicleService.getVehicles();
  }
}
