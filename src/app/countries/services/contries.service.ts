import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  searchCountryByAlphacode(alpha:string): Observable<Country | null> {

    const url = `${ this.apiUrl }/alpha/${alpha}`;

    return this.http.get<Country[]>( url )
    .pipe(
      //usamos el map y obtenemos el primer valor de la lista
      map( countries => countries.length > 0 ? countries[0] : null),
      catchError( () => of(null))
    );

  }

  //Observable(programacion reactiva)
  searchCapital( capital: string ): Observable<Country[]> {

    const url = `${ this.apiUrl }/capital/${capital}`;

    return this.http.get<Country[]>( url )
    .pipe(
      //si detecta un error, setea la lista vacia al observable
      catchError( () => of([]))
    );

  }

  searchCountry( name: string ): Observable<Country[]> {

    const url = `${ this.apiUrl }/name/${name}`;

    return this.http.get<Country[]>( url )
    .pipe(
      //si detecta un error, setea la lista vacia al observable
      catchError( () => of([]))
    );

  }

  searchRegion( region: string ): Observable<Country[]> {

    const url = `${ this.apiUrl }/region/${region}`;

    return this.http.get<Country[]>( url )
    .pipe(
      //si detecta un error, setea la lista vacia al observable
      catchError( () => of([]))
    );

  }

}

