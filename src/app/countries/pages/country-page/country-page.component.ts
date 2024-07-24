import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/contries.service';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [

  ]
})
export class CountryPageComponent implements OnInit {

public country?: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.countriesService.searchCountryByAlphacode( id )),
    )
    .subscribe( country => {
      console.log({ country })

      if(!country){//si no existe
        return this.router.navigateByUrl('')//redirecciona
      }

      return this.country = country;
    })
  }

}
