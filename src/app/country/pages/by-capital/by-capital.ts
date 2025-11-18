import { Component, inject, signal } from '@angular/core';
import { InputSearch } from "../../components/input-search/input-search";
import { CountryList } from "../../components/country-list/country-list";
import { CountryService } from '../../services/country.service';
import { RESTCountry } from '../../interfaces/rest-countries.interface';

@Component({
  selector: 'app-by-capital-page',
  imports: [InputSearch, CountryList],
  templateUrl: './by-capital.html',
})
export class ByCapitalPage {

  private CountryService = inject(CountryService);

  isLoding = signal(false);
  isError = signal<string | null>(null);
  countries = signal<RESTCountry[]>([]);


  onSearch(inputBuscar: string){
    if(this.isLoding()) return;

    this.isLoding.set(true);
    this.isError.set(null);

    this.CountryService.searchByCapital(inputBuscar)
      .subscribe((countries) => {
        this.isLoding.set(false)
        this.countries.set(countries)

        console.log(countries)
      });
  }

}
