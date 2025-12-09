import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries.interface';
import { map, Observable, catchError, throwError, delay, of, tap} from 'rxjs';
import type { Country } from '../interfaces/country.inteface';
import { CountryMapper } from '../../mappers/country.mapper';
import { Region } from '../interfaces/region.interface';

const API_URL = 'https://restcountries.com/v3.1'

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient);

  private queryCacheCapital = new Map<string, Country[]>();
  private queryCacheCountry = new Map<string, Country[]>();
  private queryCacheRegion = new Map<Region, Country[]>();


  searchByCapital(query: string): Observable<Country[]>{
    query = query.toLocaleLowerCase();

    if (this.queryCacheCapital.has(query)){
      console.log('Llegando por capital');
      return of(this.queryCacheCapital.get(query) ?? []);
    }

    console.log('Nueva busqueda');
    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${ query }`)
      .pipe(
        map(resp => CountryMapper.mapRestCountriesToCountryArray(resp)),
        tap( countries => this.queryCacheCapital.set(query, countries)),
        catchError(error => {
          return throwError(()=> new Error(`No se encontró una capital con "${query}"`));
        })
    );
  }

  searchByCountry(query: string): Observable<Country[]>{
    query = query.toLocaleLowerCase();

    if (this.queryCacheCountry.has(query)){
      console.log('Llegando por country');
      return of(this.queryCacheCountry.get(query) ?? []);
    }

    console.log('Nueva busqueda');
    return this.http.get<RESTCountry[]>(`${API_URL}/name/${ query }`)
      .pipe(
        map(resp => CountryMapper.mapRestCountriesToCountryArray(resp)),
        tap( countries => this.queryCacheCountry.set(query, countries)),
        // delay(2000),
        catchError(error => {
          return throwError(()=> new Error(`No se encontró un país con "${query}"`));
        })
      );
  }

  searchByRegion(region: Region): Observable<Country[]>{

    if (this.queryCacheRegion.has(region)){
      console.log('Llegando por RequeryCacheRegion');
      return of(this.queryCacheRegion.get(region) ?? []);
    }

    console.log('Nueva busqueda');
    return this.http.get<RESTCountry[]>(`${API_URL}/region/${region}`)
      .pipe(
        map(resp => CountryMapper.mapRestCountriesToCountryArray(resp)),
        tap( countries => this.queryCacheRegion.set(region, countries)),
        // delay(2000),
        catchError(error => {
          return throwError(()=> new Error(`No se encontró una region con "${region}"`));
        })
      );
  }

  searchCountryByAlphaCode(code: string){
    code = code.toLocaleLowerCase();
    return this.http.get<RESTCountry[]>(`${API_URL}/alpha/${ code }`)
      .pipe(
        map(resp => CountryMapper.mapRestCountriesToCountryArray(resp)),
        map(countries => countries.at(0)),
        catchError(error => {
          return throwError(()=> new Error(`No se encontró un país con el código: "${code}"`));
        })
      );
  }

}
