import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { PokemonItem } from '../Pokemon'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pokemons: PokemonItem[]
  activeUser: string = sessionStorage.getItem('user');
  
  constructor(
    private ps: PokemonService,
  ) { }

  ngOnInit() {
    this.ps.findPokemons().subscribe(
      res => {
        this.pokemons = res.results;
      },
      error => {
        alert("Ops! Tente mais tarde!")
      }
    )
  }

}
