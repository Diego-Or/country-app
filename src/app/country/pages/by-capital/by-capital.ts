import { Component } from '@angular/core';
import { InputSearch } from "../../components/input-search/input-search";
import { CountryList } from "../../components/country-list/country-list";

@Component({
  selector: 'app-by-capital-page',
  imports: [InputSearch, CountryList],
  templateUrl: './by-capital.html',
})
export class ByCapitalPage {

  onSearch(inputValue: string){
    console.log(inputValue);
  }

}
