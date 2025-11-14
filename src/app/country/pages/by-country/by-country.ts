import { Component } from '@angular/core';
import { InputSearch } from "../../components/input-search/input-search";
import { CountryList } from "../../components/country-list/country-list";

@Component({
  selector: 'app-by-country',
  imports: [InputSearch, CountryList],
  templateUrl: './by-country.html',
})
export class ByCountryPage {

  onSearch(inputValue: string){
    console.log(inputValue);
  }

}
