import {Injectable} from "@angular/core";
import {Hero} from "../model/hero";
import {Headers, Http} from "@angular/http";

import 'rxjs/add/operator/map'
import {Observable} from "rxjs/Observable";

@Injectable()
export class HeroSearchService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  search(term: string): Observable<Hero[]> {
    return this.http.get(`api/heroes/?name=${term}`)
      .map(response => response.json().data as Hero[]);
  }
}
