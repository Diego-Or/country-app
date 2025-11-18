import { Component, input } from '@angular/core';
import { Country } from '../../interfaces/country.inteface';

@Component({
  selector: 'country-list',
  imports: [],
  templateUrl: './country-list.html',
})
export class CountryList {

  countries = input.required<Country[]>()

}
