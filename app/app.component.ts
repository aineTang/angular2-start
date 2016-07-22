import { Component, OnInit } from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/views/app.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [HeroService]
})

export class AppComponent implements OnInit{
    title = "Tour of heroes";
    ngOnInit(){

    }
}