"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require("@angular/common");
var FieldErrorCheck = (function () {
    function FieldErrorCheck() {
        this.DefaultMessages = {
            minlength: '长度不能小于<%=requiredLength%>个字符',
            maxlength: '长度不能大于<%=requiredLength%>个字符',
            pattern: '格式错误，<%=requiredPattern%>',
            required: '必须填写<%=name%>',
        };
        this.messagesMap = {};
        this.variables = {};
    }
    FieldErrorCheck.prototype.ngOnInIt = function () {
    };
    Object.defineProperty(FieldErrorCheck.prototype, "errors", {
        get: function () {
            var messages = [];
            for (var key in this.field.errors) {
                var message = this.messagesMap[key];
                if (!message) {
                    message = this.DefaultMessages[key];
                }
                messages.push({
                    key: key,
                    message: message
                });
            }
            return messages;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', common_1.NgModel)
    ], FieldErrorCheck.prototype, "field", void 0);
    __decorate([
        core_1.Input('messages'), 
        __metadata('design:type', Object)
    ], FieldErrorCheck.prototype, "messagesMap", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FieldErrorCheck.prototype, "variables", void 0);
    FieldErrorCheck = __decorate([
        core_1.Component({
            selector: 'field-error-check',
            template: require('./field-error-check.html'),
            styles: [require('./field-error-check.scss')]
        }), 
        __metadata('design:paramtypes', [])
    ], FieldErrorCheck);
    return FieldErrorCheck;
}());
exports.FieldErrorCheck = FieldErrorCheck;
//# sourceMappingURL=field-error-check.js.map