import { Component, inject, resource, signal } from '@angular/core';
import { InputSearch } from "../../components/input-search/input-search";
import { CountryList } from "../../components/country-list/country-list";
import { CountryService } from '../../services/country.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-by-country',
  imports: [InputSearch, CountryList],
  templateUrl: './by-country.html',
})
export class ByCountryPage {

  private CountryService = inject(CountryService);
  query = signal('');

  countryResource = resource({
    params: () => ({ query: this.query() }),
    loader: async( { params } ) => {

      if(!params.query) return [];

      return await firstValueFrom(
        this.CountryService.searchByCountry(params.query)
      )
    }
  })
}
