import { Component, signal } from '@angular/core';
import { InputSearch } from "../../components/input-search/input-search";
import { CountryList } from "../../components/country-list/country-list";
import { RESTCountry } from '../../interfaces/rest-countries.interface';

@Component({
  selector: 'app-by-country',
  imports: [InputSearch, CountryList],
  templateUrl: './by-country.html',
})
export class ByCountryPage {

  countries = signal<RESTCountry[]>([]);

  onSearch(inputBuscar: string){
    console.log(inputBuscar);
  }

}
