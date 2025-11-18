import { Component, signal } from '@angular/core';
import { CountryList } from "../../components/country-list/country-list";
import { RESTCountry } from '../../interfaces/rest-countries.interface';

@Component({
  selector: 'app-by-region',
  imports: [CountryList],
  templateUrl: './by-region.html',
})
export class ByRegionPage {
  countries = signal<RESTCountry[]>([]);
}
