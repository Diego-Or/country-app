import { Component, input } from '@angular/core';
import { Country } from '../../interfaces/country.inteface';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'country-list',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './country-list.html',
})
export class CountryList {

  countries = input.required<Country[]>()

}
