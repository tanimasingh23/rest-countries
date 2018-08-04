import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [Location]
})
export class AboutComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  goBackToPreviousPage(): any {
    this.location.back();
  }


}
