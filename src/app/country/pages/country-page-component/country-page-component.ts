import { CountryService } from './../../services/country.service';
import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-page-component',
  imports: [],
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
