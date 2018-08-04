import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit, OnDestroy, ViewContainerRef } from "@angular/core";
import { Location } from "@angular/common";
import { RestService } from '../rest.service';
import { Pipe, PipeTransform } from '@angular/core';
import { Currency, Language } from './filter';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css'],
  providers: [Location]
})
export class AllCountriesComponent implements OnInit {
  public allCountries: any;
  public allData: any;
  public selectedCurrencies: any;
  public filterData: any[] = [];
  public search: any = { name: '' };
  constructor(private _route: ActivatedRoute, private router: Router, private restService: RestService, private location: Location) { }

  ngOnInit() {
    let myRegion = this._route.snapshot.paramMap.get('regionid');
    let myCurrencyName = this._route.snapshot.paramMap.get('currencyName');
    let myLanguageName = this._route.snapshot.paramMap.get('languageName');

    this.restService.getAllCountriesOfSelectedRegion(myRegion).subscribe(
      data => {
        this.allCountries = data;
        console.log(this.allCountries);
        this.selectedCurrencies = data.map(a => a.currencies);
        console.log(this.selectedCurrencies);
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    );
    if (myCurrencyName) {
      this.restService.getAllRegions().subscribe(
        data => {
          this.allData = data;
          for (let item of this.allData) {
            let currency: Currency;
            for (currency of item.currencies) {
              if (currency.name === myCurrencyName) {
                this.filterData.push(item);
              }
            }
          }
        },
        error => {
          console.log("some error occured");
          console.log(error.errorMessage);
        }
      );
    }
    if (myLanguageName) {
      this.restService.getAllRegions().subscribe(
        data => {
          this.allData = data;
          for (let item of this.allData) {
            let language: Language;
            for (language of item.languages) {
              if (language.name === myLanguageName) {
                this.filterData.push(item);
              }
            }
          }
        },
        error => {
          console.log("some error occured");
          console.log(error.errorMessage);
        }
      );
    }
  }
  goBackToPreviousPage(): any {

    this.location.back();

  }

}
