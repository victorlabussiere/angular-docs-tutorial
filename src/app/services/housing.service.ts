import { Injectable } from '@angular/core';

// interface imports
import { HousingLocation } from '../../types/housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  housingLocationList: HousingLocation[] = []
  url: string = 'http://localhost:3001/locations'
  constructor() { }

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = fetch(this.url).then(res => res.json())
    return await data ?? []
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = fetch(`${this.url}/${id}`).then(res => res.json())
    return await data ?? {}
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }

}
