import { Currency, Name } from './../country/interfaces/rest-countries.interface';
import { Country } from "../country/interfaces/country.inteface";
import { RESTCountry } from "../country/interfaces/rest-countries.interface";

export class CountryMapper {
  static mapRestCountrytoCountry(Country: RESTCountry): Country {
    return {
      cca2: Country.cca2,
      flag: Country.flag,
      flagSvg: Country.flags.svg,
      name: Country.translations['spa'].common ?? 'No Spanish Name',
      capital: Country.capital.join(','),
      region: Country.region,
      subRegion: Country.subregion,
      population: Country.population,
      map: Country.maps.googleMaps,
    };
  }


  static mapRestCountriesToCountryArray( country: RESTCountry[]):Country[]{
    return country.map(this.mapRestCountrytoCountry)
  }

}
