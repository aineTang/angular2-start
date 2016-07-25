import { Component, OnInit } from "@angular/core";
import { HeroService } from "./hero.service"
import { Router } from '@angular/router';
import { Hero } from "./hero";
import { HeroDetailComponent } from './hero-detail.component'

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/views/hero.html',
    styleUrls: ['app/styles/hero.css'],
    directives: [HeroDetailComponent]
})

export class HeroesComponent implements OnInit{
    // hero = 'Windstorm';
    // hero : Hero = {
    //     id: 1,
    //     name: 'WindStorm'
    // };
    // heroes = HEROES;
    constructor(private heroService: HeroService, private router: Router){}

    heroes: Hero[];
    selectedHero: Hero;
    /**
     * 点击选择英雄
     * @param hero
     */
    onSelect (hero) {
        this.selectedHero = hero;
    }

    ngOnInit(){
        this.heroService.getHeroes()
            .then((data) => {
                this.heroes = data;
            });
    }
    gotoDetail() {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}