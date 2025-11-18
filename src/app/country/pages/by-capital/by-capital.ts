import { Component, inject } from '@angular/core';
import { InputSearch } from "../../components/input-search/input-search";
import { CountryList } from "../../components/country-list/country-list";
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital-page',
  imports: [InputSearch, CountryList],
  templateUrl: './by-capital.html',
})
export class ByCapitalPage {

  private CountryService = inject(CountryService);

  onSearch(inputBuscar: string){
    this.CountryService.searchByCapital(inputBuscar)
      .subscribe(data => console.log(data));
  }

}
