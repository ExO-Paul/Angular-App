import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Hero} from "../model/hero";
import {Subject} from "rxjs/Subject";
import {HeroSearchService} from "../service/hero-search.service";
import {Router} from "@angular/router";

import "rxjs/add/observable/of";

import "rxjs/add/operator/catch";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";

@Component({
  selector: 'hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
  providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {

  heroes: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroSearchService: HeroSearchService, private router: Router) {
  }

  ngOnInit() {
    this.heroes = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term ? this.heroSearchService.search(term) : Observable.of<Hero[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Hero[]>([]);
      })
  }

  search(term: string) {
    this.searchTerms.next(term);
  }

  goToDetail(hero: Hero){
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }

}
