import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'valid-check',
  styles: [require('./valid-check.scss')],
  template: require('./valid-check.html')
})

export class ValidCheck implements OnInit{
  constructor() {
  }
  ngOnInit(){
  }
  @Input() field : FormControl
}
