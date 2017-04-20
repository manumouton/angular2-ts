import {Component, OnInit} from '@angular/core';
import {HeroService} from "../services/hero.service";
import {Hero} from "../model/hero";


@Component({
  selector: 'my-dashboard',
  templateUrl: '../../templates/dashboard.component.html',
  styleUrls: ['../../../css/dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}
