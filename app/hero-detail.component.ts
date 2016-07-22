import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { HeroService } from './hero.service';

import { Hero } from "./hero";
@Component({
    selector: 'my-hero-detail',
    templateUrl:'app/views/hero-detail.html',
    providers: [ActivatedRoute]
})

export class HeroDetailComponent implements OnInit, OnDestroy{
    constructor(private heroService: HeroService,private route: ActivatedRoute) {
    }
    hero: Hero;
    sub: any;
    ngOnInit(){
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        });
    }
    ngOnDestroy(){
        this.sub.unsubscribe();
    }
    goBack() {
        window.history.back();
    }
}