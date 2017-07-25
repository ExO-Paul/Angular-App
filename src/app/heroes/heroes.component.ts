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

  goToDetail() {
    this.router.navigate(['/detail', this.selectedHero.id])
  }

  add(name: String): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      })
  }

  delete(hero: Hero): void {
    this.heroService.delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(aHero => aHero !== hero);

        if (this.selectedHero === hero) {
          this.selectedHero = null;
        }
      })
  }
}
