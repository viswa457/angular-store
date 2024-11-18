import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location/housing-location';
import { CommonModule } from '@angular/common';
import {HousingService} from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }

  housingLocationList: HousingLocation[] = [
    {
      id: 1,
      name: 'Test Home',
      city: 'Test city',
      state: 'ST',
      photo: `${this.baseUrl}/example-house.jpg`,
      availableUnits: 99,
      wifi: true,
      laundry: false,
    },
    {
      id: 2,
      name: 'Test Home',
      city: 'Test city',
      state: 'ST',
      photo: `${this.baseUrl}/example-house.jpg`,
      availableUnits: 99,
      wifi: true,
      laundry: false,
    },
    {
      id: 3,
      name: 'Test Home',
      city: 'Test city',
      state: 'ST',
      photo: `${this.baseUrl}/example-house.jpg`,
      availableUnits: 99,
      wifi: true,
      laundry: false,
    }
  ];

}
