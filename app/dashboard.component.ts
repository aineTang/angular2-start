import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/views/dashboard.html',
    providers: [Router]
})

export class Dashboard implements OnInit{
    constructor(private heroService: HeroService, private router: Router) {

    }

    heroes : Hero[] = [];

    ngOnInit(){
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }

    gotoDetail(hero: Hero) {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}