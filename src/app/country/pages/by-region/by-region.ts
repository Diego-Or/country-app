import { Component, signal } from '@angular/core';
import { CountryList } from "../../components/country-list/country-list";
import { Country } from '../../interfaces/country.inteface';

@Component({
  selector: 'app-by-region',
  imports: [CountryList],
  templateUrl: './by-region.html',
})
export class ByRegionPage {
  countries = signal<Country[]>([]);
}
