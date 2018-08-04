import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit, OnDestroy, ViewContainerRef } from "@angular/core";
import { Location } from "@angular/common";
import { RestService } from '../rest.service';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-single-country',
  templateUrl: './single-country.component.html',
  styleUrls: ['./single-country.component.css'],
  providers: [Location]
})
export class SingleCountryComponent implements OnInit {
  public countryInfo: any;

  constructor(private _route: ActivatedRoute, private router: Router, private restService: RestService, private location: Location) { }

  ngOnInit() {
    let myCountry = this._route.snapshot.paramMap.get('code');
    this.restService.getSelectedCountryInfo(myCountry).subscribe(
      data => {
        this.countryInfo = [data];
        console.log(this.countryInfo);
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    );
  }
  goBackToPreviousPage(): any {

    this.location.back();

  }
}
