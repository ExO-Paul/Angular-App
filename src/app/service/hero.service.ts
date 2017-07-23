import {Injectable} from "@angular/core";
import {Hero} from "../model/hero";
import {HEROES} from "./mock/mock-heroes";

@Injectable()
export class HeroService {

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES)
  }

  getHeroesSlow(): Promise<Hero[]> {
    return new Promise(resolve => setTimeout(() => this.getHeroes(), 2000))
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
  }
}
