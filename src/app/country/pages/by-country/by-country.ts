import { Component, signal } from '@angular/core';
import { InputSearch } from "../../components/input-search/input-search";
import { CountryList } from "../../components/country-list/country-list";
import { RESTCountry } from '../../interfaces/rest-countries.interface';
import { Country } from '../../interfaces/country.inteface';

@Component({
  selector: 'app-by-country',
  imports: [InputSearch, CountryList],
  templateUrl: './by-country.html',
})
export class ByCountryPage {

  countries = signal<Country[]>([]);

  onSearch(inputBuscar: string){
    console.log(inputBuscar);
  }

}
