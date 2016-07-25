import { Component, OnInit, Input } from '@angular/core';
import { NgModel } from "@angular/common";

@Component({
  selector: 'field-error-check',
  template: require('./field-error-check.html'),
  styles: [require('./field-error-check.scss')]
})

export class FieldErrorCheck implements OnInit{
  constructor(){

  }
  DefaultMessages = {
    minlength: '长度不能小于<%=requiredLength%>个字符',
    maxlength: '长度不能大于<%=requiredLength%>个字符',
    pattern: '格式错误，<%=requiredPattern%>',
    required: '必须填写<%=name%>',
  };

  @Input() field: NgModel;

  @Input('messages') messagesMap = {};

  @Input() variables = {};

  ngOnInIt(){

  }

  get errors(): Array<Object> {
    var messages = [];
    for (let key in this.field.errors) {
      let message = this.messagesMap[key];
      if (!message) {
        message = this.DefaultMessages[key];
      }
      messages.push({
        key: key,
        message: message
      });
    }
    return messages;
  }
}
