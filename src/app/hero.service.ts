import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  constructor(private messageService: MessageService) { }
  getHeroes(): Observable<Hero[]> {
    this.messageService.add("HeroService: Super j'ai trouve les employes!");
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add("HeroService: Super j'ai trouve l'employe!");
    return of(HEROES.find(hero => hero.id === id));
  }
}
