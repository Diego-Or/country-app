import { Routes } from '@angular/router';
import { ByCapitalPage } from './pages/by-capital/by-capital';
import { CountryLayout } from './layouts/country-layout/country-layout';
import { ByCountryPage } from './pages/by-country/by-country';

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
        path: '**',
        redirectTo: 'by-capital',
      }
    ],
  },
];

export default countryRoutes;
