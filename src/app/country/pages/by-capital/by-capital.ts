import { Component, inject, resource, signal } from '@angular/core';
import { InputSearch } from "../../components/input-search/input-search";
import { CountryList } from "../../components/country-list/country-list";
import { CountryService } from '../../services/country.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-by-capital-page',
  imports: [InputSearch, CountryList],
  templateUrl: './by-capital.html',
})
export class ByCapitalPage {

  private CountryService = inject(CountryService);
  query = signal('');

  countryResource = resource({
    params: () => ({ query: this.query() }),
    loader: async( { params } ) => {

      if(!params.query) return [];

      return await firstValueFrom(
        this.CountryService.searchByCapital(params.query)
      )
    }
  })

  // isLoding = signal(false);
  // isError = signal<string | null>(null);
  // countries = signal<Country[]>([]);


  // onSearch(inputBuscar: string){
  //   if(this.isLoding()) return;

  //   this.isLoding.set(true);
  //   this.isError.set(null);

  //   this.CountryService.searchByCapital(inputBuscar)
  //     .subscribe({
  //       next: (countries) => {
  //         this.countries.set(countries);
  //         this.isLoding.set(false);
  //       },
  //       error: (err) => {
  //         this.isLoding.set(false);
  //         this.countries.set([]);
  //         this.isError.set(err);
  //       }
  //     });
  // }

}
