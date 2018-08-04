import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit, OnDestroy, ViewContainerRef } from "@angular/core";
import { Location } from "@angular/common";
import { RestService } from '../rest.service';
import { Pipe, PipeTransform } from '@angular/core';
import { Dropdown } from './dropdown';

@Component({
  selector: 'app-all-regions',
  templateUrl: './all-regions.component.html',
  styleUrls: ['./all-regions.component.css'],
  providers: [Location]
})
export class AllRegionsComponent implements OnInit, Dropdown {
  public allRegions: any;
  public allData: any;
  public region: any;

  constructor(private _route: ActivatedRoute, private router: Router, private restService: RestService, private location: Location) { }

  ngOnInit() {
    function uniqueValues(value, index, self) {
      return self.indexOf(value) === index;
    }
    this.restService.getAllRegions().subscribe(
      data => {
        this.allData = data;
        let result = data.map(a => a.region);
        let unique = result.filter(uniqueValues);
        console.log(unique);
        this.allRegions = unique;
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    );
  }
  onSelectRegion(val) {
    console.log(val);
    this.region = val;
    this.router.navigate(['/countryView', { regionid: val }]).then(() => {
    });
  }
  onSelectCurrency(val) {
    console.log(val);
    this.region = val;
    this.router.navigate(['/countryView', { currencyName: val }]).then(() => {
    });
  }
  onSelectLanguage(val) {
    console.log(val);
    this.region = val;
    this.router.navigate(['/countryView', { languageName: val }]).then(() => {
    });
  }

}
