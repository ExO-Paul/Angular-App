import {Component, OnInit} from "@angular/core";
import {Hero} from "./model/hero";
import {HeroService} from "./service/hero.service";
import {RouterModule} from "@angular/router";
import {HeroesComponent} from "./heroes/heroes.component";




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent {

}
