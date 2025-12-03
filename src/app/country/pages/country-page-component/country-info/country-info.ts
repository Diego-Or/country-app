import { Component, computed, input } from '@angular/core';
import { Country } from '../../../interfaces/country.inteface';

@Component({
  selector: 'country-info',
  imports: [],
  templateUrl: './country-info.html',
})
export class CountryInfo {

    country = input.required<Country>();
    currentYear = computed(()=>{
      return new Date().getFullYear();
    })
 }
