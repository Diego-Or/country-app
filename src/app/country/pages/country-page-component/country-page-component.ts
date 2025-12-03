import { CountryService } from './../../services/country.service';
import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { NotFound } from "../../../shared/components/not-found/not-found";
import { CountryInfo } from "./country-info/country-info";

@Component({
  selector: 'app-country-page-component',
  imports: [NotFound, CountryInfo],
  templateUrl: './country-page-component.html',
})
export class CountryPageComponent {

  countryCode = inject(ActivatedRoute).snapshot.params['code'];
  CountryService = inject(CountryService);

  countryResource = rxResource(
    {
      params: () => this.countryCode,
      stream: ({params: code}) => {
        return  this.CountryService.searchCountryByAlphaCode(code)
      }
    }
  )
}
