import { Component, OnInit } from '@angular/core';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
  }
  housingLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];
  // housingService :HousingService = inject(HousingService);

  constructor(housingService:HousingService) { 
    this.housingLocationList=housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }
  
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
    }
  
    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
