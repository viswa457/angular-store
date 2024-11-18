import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location/housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  housingLocationList: HousingLocation[] = [];

  constructor() { }

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find((housingLocation) => housingLocation.id === id );
  }
}

