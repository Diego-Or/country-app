import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries.interface';
import { map, Observable, catchError, throwError } from 'rxjs';
import type { Country } from '../interfaces/country.inteface';
import { CountryMapper } from '../../mappers/country.mapper';

const API_URL = 'https://restcountries.com/v3.1'

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient);

  searchByCapital(query: string): Observable<Country[]>{
    query = query.toLocaleLowerCase();
    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${ query }`)
      .pipe(
        map(resp => CountryMapper.mapRestCountriesToCountryArray(resp)),
        catchError(error => {
          console.log('Errorasdfasd');
          return throwError(()=> new Error(`No se encontró una capital con por ${query}`));
        })
      );
  }
}
