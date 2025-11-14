import { Routes } from '@angular/router';
import { ByCapitalPage } from './pages/by-capital/by-capital';
import { CountryLayout } from './layouts/country-layout/country-layout';
import { ByCountryPage } from './pages/by-country/by-country';
import { ByRegionPage } from './pages/by-region/by-region';
import { CountryPageComponent } from './pages/country-page-component/country-page-component';

export const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayout,
    children: [
      {
        path: 'by-capital',
        component: ByCapitalPage,
      },
      {
        path: 'by-country',
        component: ByCountryPage,
      },
      {
        path: 'by-region',
        component: ByRegionPage,
      },
      {
        path: 'by/:code',
        component: CountryPageComponent,
      },
      {
        path: '**',
        redirectTo: 'by-capital',
      }
    ],
  },
];

export default countryRoutes;
