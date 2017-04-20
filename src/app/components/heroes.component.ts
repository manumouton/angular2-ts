import {Component, OnInit} from '@angular/core';
import {Hero} from "../model/hero";
import {HeroService} from "../services/hero.service";
import {Router} from "@angular/router";

@Component({
  selector: 'my-heroes',
  templateUrl: '../../templates/heroes.component.html',
  styleUrls: ['../../../css/heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes:Hero[];
  selectedHero:Hero;

  constructor(
    private router: Router,
    private heroService:HeroService
  ){}

  getHeroes():void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes);

    // this.heroService.getHeroesSlowly()
      // .then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }
}
