"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordModule = void 0;
const common_1 = require("@nestjs/common");
const password_service_1 = require("./password.service");
const password_controller_1 = require("./password.controller");
const mongoose_1 = require("@nestjs/mongoose");
const password_schema_1 = require("./password.schema");
const mailer_1 = require("@nestjs-modules/mailer");
let PasswordModule = class PasswordModule {
};
PasswordModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'password', schema: password_schema_1.PasswordSchema }]),
            mailer_1.MailerModule.forRoot({
                transport: {
                    host: '0.0.0.0',
                    port: 1025
                },
                defaults: {
                    from: 'balaeditz61@gmail.com'
                }
            })
        ],
        providers: [password_service_1.PasswordService],
        controllers: [password_controller_1.PasswordController]
    })
], PasswordModule);
exports.PasswordModule = PasswordModule;
//# sourceMappingURL=password.module.js.map