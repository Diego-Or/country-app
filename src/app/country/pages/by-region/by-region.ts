import { Component, inject, signal } from '@angular/core';
import { CountryList } from "../../components/country-list/country-list";
import { CountryService } from '../../services/country.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { Region } from '../../interfaces/region.interface';

@Component({
  selector: 'app-by-region',
  imports: [CountryList],
  templateUrl: './by-region.html',
})
export class ByRegionPage {

  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];

  selectedRegion = signal<Region|null>(null);

  private CountryService = inject(CountryService);
  RegionResource = rxResource(
    {
      params: () => ( {region: this.selectedRegion()} ),
      stream: ({params}) => {
        if(!params.region) return of([]);
        return  this.CountryService.searchByRegion(params.region)
      }

    });
}
