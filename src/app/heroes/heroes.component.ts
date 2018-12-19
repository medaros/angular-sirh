import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  hero: Hero = {
    id: 1,
    name: 'Mohamed',
    age: 21,
    currentPosition: 'Developer'
  };

  // selectedHero: Hero;

  // onSelect(hero: Hero) : void {
  //   this.selectedHero = hero;
  // }

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  // getHeroes(): Observable<Hero[]> {
  //   return of(HEROES);
  // }

  ngOnInit() {
    this.getHeroes();
  }

}