import { Component } from '@angular/core';
import { VehicleService } from './services/vehicle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front-End Screen';
  vehicles: any;

  constructor( private vehicleService: VehicleService ) {
    debugger;
    this.vehicles = this.vehicleService.getVehicles();
  }
}
