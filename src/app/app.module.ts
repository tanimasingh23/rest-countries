import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule , Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { AppComponent } from './app.component';
import { AllRegionsComponent } from './all-regions/all-regions.component';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { SingleCountryComponent } from './single-country/single-country.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RestService } from './rest.service';

@NgModule({
  declarations: [
    AppComponent,
    AllRegionsComponent,
    AllCountriesComponent,
    SingleCountryComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FilterPipeModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'allRegions',component:AllRegionsComponent},
      {path:'countryView',component:AllCountriesComponent},
      {path:'singleCountry',component:SingleCountryComponent},
      {path:'about',component:AboutComponent},
      {path:'',redirectTo:'allRegions',pathMatch:'full'}, 
      {path: '**', component: NotFoundComponent}
    ])
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
