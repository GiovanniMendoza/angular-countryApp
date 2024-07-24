import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/contries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  public countries: Country[] = [];

  constructor ( private countriesService: CountriesService){}

  public searchByCountry(term:string){
    this.countriesService.searchCountry(term).subscribe( countries => {
      this.countries = countries;
    });
  }

}
