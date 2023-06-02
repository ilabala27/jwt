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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordController = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
const password_service_1 = require("./password.service");
let PasswordController = class PasswordController {
    constructor(passwordservice, mailerservice) {
        this.passwordservice = passwordservice;
        this.mailerservice = mailerservice;
    }
    async forgot(email) {
        const token = Math.random().toString(20).substring(2, 12);
        await this.passwordservice.create({
            email, token
        });
        const url = `http://localhost:4444/reset/${token}`;
        await this.mailerservice.sendMail({
            to: email,
            subject: 'reset yor password',
            html: `Click <a href="${url}"> here </a> to reset your password!`
        });
        return {
            message: 'Please check yourt email!'
        };
    }
};
__decorate([
    (0, common_1.Post)('forgot'),
    __param(0, (0, common_1.Body)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PasswordController.prototype, "forgot", null);
PasswordController = __decorate([
    (0, common_1.Controller)('password'),
    __metadata("design:paramtypes", [password_service_1.PasswordService,
        mailer_1.MailerService])
], PasswordController);
exports.PasswordController = PasswordController;
//# sourceMappingURL=password.controller.js.map