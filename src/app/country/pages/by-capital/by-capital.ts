import { ActivatedRoute, Router } from '@angular/router';
import { Component, inject, linkedSignal, resource, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { firstValueFrom, of } from 'rxjs';

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

  ActivatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  queryParam = this.ActivatedRoute.snapshot.queryParamMap.get('query') ?? '';

  query = linkedSignal(() => this.queryParam);

  capitalResource = rxResource(
    {
      params: () => ( {query: this.query()} ),
      stream: ({params}) => {
        if(!params.query) return of([]);
        this.router.navigate(['/country/by-capital'],{
          queryParams: {
            query: params.query,
            // hola: 'mundo'
          }
        })
        return  this.CountryService.searchByCapital(params.query)
      }
    }
  )

  // CON PROMESAS
  // countryResource = resource({
  //   params: () => ({ query: this.query() }),
  //   loader: async( { params } ) => {

  //     if(!params.query) return [];

  //     return await firstValueFrom(
  //       this.CountryService.searchByCapital(params.query)
  //     )
  //   }
  // })



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
