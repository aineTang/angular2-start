import { Component, OnInit } from "@angular/core";
import { HeroService } from "./hero.service"
import { Hero } from "./hero";
import { HeroDetailComponent } from './hero-detail.component'

@Component({
    selector: 'my-app',
    templateUrl: 'app/views/hero.html',
    styleUrls: ['app/styles/hero.css'],
    directives: [HeroDetailComponent],
    providers: [HeroService]

})

export class AppComponent implements OnInit{
    title = "Tour of heroes";
    // hero = 'Windstorm';
    // hero : Hero = {
    //     id: 1,
    //     name: 'WindStorm'
    // };
    // heroes = HEROES;
    heroes: Hero[];
    selectedHero: Hero;
    /**
     * 点击选择英雄
     * @param hero
     */
    onSelect (hero) {
        this.selectedHero = hero;
    }

    constructor(private heroService: HeroService){}

    ngOnInit(){
        this.heroService.getHeroes()
            .then(function (data){
                this.heroes = data;
            });
    }
}