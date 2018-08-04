import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

//observable
import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs';
import 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  public baseUrl = "https://restcountries.eu/rest/v2";
  constructor(private _http: HttpClient) {
    console.log("Rest service called.");
  }
  //exception handler
  private handleError(err: HttpErrorResponse) {
    console.log("Handle error Http calls")
    console.log(err.message);
    return Observable.throw(err.message);
  }
  getAllRegions(): any {
    let myResponse = this._http.get(this.baseUrl + '/all');
    return myResponse;
  }
  getAllCountriesOfSelectedRegion(selectedregion): any {
    let myResponse = this._http.get(this.baseUrl + '/region' + '/' + selectedregion);
    return myResponse;
  }
  getSelectedCountryInfo(selectedcountry): any {
    let myResponse = this._http.get(this.baseUrl + '/alpha' + '/' + selectedcountry);
    return myResponse;
  }
}
