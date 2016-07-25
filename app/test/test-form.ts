import { Component, OnInit, ViewChild } from '@angular/core';
import { LayoutMini } from '../../_layout/mini';
import { FieldErrorCheck } from './field-error-check';
import { ValidCheck } from './valid-check';

@Component({
  selector: 'test-form',
  template: require('./test-form.html'),
  styles: [require('./test-form.scss')],
  directives: [LayoutMini, ValidCheck, FieldErrorCheck]
})

export class TestForm implements OnInit{
  constructor(){

  }
  @ViewChild('ngForm') ngForm;
  form = {};
}
