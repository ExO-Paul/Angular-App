import {Component, OnInit} from "@angular/core";
import {HeroService} from "../service/hero.service";
import {Hero} from "../model/hero";
import {Router} from "@angular/router";

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService, private router: Router) {
  }

  ngOnInit(): void {
    this.getHeroes()
  }

  heroes: Hero[];

  selectedHero: Hero;

  getHeroes(): void {
    this.heroService.getHeroes().then(value => this.heroes = value);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero
  }

  goToDetail(){
    this.router.navigate(['/detail', this.selectedHero.id])
  }
}
