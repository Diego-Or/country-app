import { ActivatedRoute, Router } from '@angular/router';
import { Component, inject, linkedSignal, resource, signal } from '@angular/core';

import { rxResource } from '@angular/core/rxjs-interop';
import { firstValueFrom, of } from 'rxjs';

import { InputSearch } from "../../components/input-search/input-search";
import { CountryList } from "../../components/country-list/country-list";
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  imports: [InputSearch, CountryList],
  templateUrl: './by-country.html',
})
export class ByCountryPage {

  private CountryService = inject(CountryService);

  ActivatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  queryParam = this.ActivatedRoute.snapshot.queryParamMap.get('query') ?? '';

  query = linkedSignal(() => this.queryParam);

  countryResource = rxResource(
    {
      params: () => ( {query: this.query()} ),
      stream: ({params}) => {
        if(!params.query) return of([]);
        this.router.navigate(['/country/by-country'],{
          queryParams: {
            query: params.query,
          }
        })
        return  this.CountryService.searchByCountry(params.query)
      }
    }
  )
  // CON PROMESAS
  //   countryResource = resource({
  //     params: () => ({ query: this.query() }),
  //     loader: async( { params } ) => {

  //       if(!params.query) return [];

  //       return await firstValueFrom(
  //         this.CountryService.searchByCountry(params.query)
  //       )
  //     }
  //   })
}
