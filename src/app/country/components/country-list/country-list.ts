import { Component, input } from '@angular/core';
import { Country } from '../../interfaces/country.inteface';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'country-list',
  imports: [DecimalPipe],
  templateUrl: './country-list.html',
})
export class CountryList {

  countries = input.required<Country[]>()

}
