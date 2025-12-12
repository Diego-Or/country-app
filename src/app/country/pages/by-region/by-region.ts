import { Component, inject, linkedSignal, signal } from '@angular/core';
import { CountryList } from "../../components/country-list/country-list";
import { CountryService } from '../../services/country.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { Region } from '../../interfaces/region.interface';
import { ActivatedRoute, Router } from '@angular/router';

function validateQueryParam(queryParam: string): Region{
  queryParam = queryParam.toLowerCase();

  const validRegions: Record<string, Region> ={
    'africa': 'Africa',
    'americas': 'Americas',
    'asia': 'Asia',
    'europe': 'Europe',
    'oceania': 'Oceania',
    'antarctic': 'Antarctic',
  };

  return validRegions[queryParam] ?? 'Americas'
}


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

  ActivatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  queryParam = this.ActivatedRoute.snapshot.queryParamMap.get('region') ?? '';

  selectedRegion = linkedSignal<Region|null>(() => validateQueryParam(this.queryParam));

  private CountryService = inject(CountryService);


  RegionResource = rxResource(
    {
      params: () => ( {region: this.selectedRegion()} ),
      stream: ({params}) => {
        if(!params.region) return of([]);
        this.router.navigate(['/country/by-region'],{
          queryParams: {
            region: params.region,
          }
        })
        return  this.CountryService.searchByRegion(params.region)
      }

    });
}
