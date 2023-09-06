import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  applyForm = new FormGroup(
    {
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  }
  );

  // route: ActivatedRoute = inject(ActivatedRoute);
    housingLocationId = -1;
    housingLocation: HousingLocation | undefined;

    constructor(private  route: ActivatedRoute = inject(ActivatedRoute),private housingService:HousingService = inject(HousingService)) {
        this.housingLocationId = Number(this.route.snapshot.params['id']);
        this.housingLocation = this.housingService.getHousingLocationById(this.housingLocationId);
    }
    ngOnInit(): void {
    }

    submitApplication() {
      this.housingService.submitApplication(
        this.applyForm.value.firstName ?? '',
        this.applyForm.value.lastName ?? '',
        this.applyForm.value.email ?? ''
      );
    }
}
