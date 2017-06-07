import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { IVehicle } from '../../interfaces/ivehicle';
import { VehicleService } from '../../services/vehicle.service';
import { Observable }     from 'rxjs/Observable';
import { Subscription } from 'rxjs'
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-vehicle-search',
  templateUrl: './vehicle-search.component.html',
  styleUrls: ['./vehicle-search.component.css'],
})

export class VehicleSearchComponent {
  title = 'Vehicle Search';
  vehicles: IVehicle[];
  vehicleSubscription : Subscription ; 
  constructor( 
    private router : Router,
    private vehicleService : VehicleService
  ) {}

  getVehicles(): void{
    this.vehicleSubscription = this.vehicleService.getVehicles().subscribe((vehicles) => {
          this.vehicles = vehicles;
        });
  }

  getDetails(vehicle : IVehicle): void {
    this.router.navigate(['/vehicle-detail', vehicle.StockNumber]);
  }

  getImageUrl(vehicle : IVehicle) : string {
    return 'https://az30404.vo.msecnd.net/publicstockimages/' + vehicle.StockNumber + '/' + vehicle.StockNumber + '_FULL_LF-E.jpg';
  }

  ngOnInit(): void { 
    this.getVehicles();
    console.log(this.vehicles);
  }

  ngOnDestroy(): void {
    this.vehicleSubscription.unsubscribe();
  }
}
