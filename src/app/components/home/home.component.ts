import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingService } from 'src/app/services/housing.service';

import { HousingLocation } from 'src/types/housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // house cards controller
  housingLocationList: HousingLocation[] = []
  housingService: HousingService = inject(HousingService)

  // search input controller
  filteredLocationList: HousingLocation[] = []

  constructor() {

    this.housingService.getAllHousingLocations()
      .then((houseList: HousingLocation[]) => {
        this.housingLocationList = houseList
        this.filteredLocationList = houseList
      })

    this.filteredLocationList = this.housingLocationList
  }

  // search input controller method
  filterResults(text: string) {
    if (!text) { this.filteredLocationList = this.housingLocationList }
    else this.filteredLocationList = this.housingLocationList
      .filter(house => house?.city.toLowerCase()
        .includes(text.toLowerCase().trim())
      )
  }

}
