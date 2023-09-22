"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const Joi = require("@hapi/joi");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const homeless_module_1 = require("./homeless/homeless.module");
const service_org_module_1 = require("./service-org/service-org.module");
const case_management_module_1 = require("./case-management/case-management.module");
const core_1 = require("./core");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                validationSchema: Joi.object({
                    AWS_REGION: Joi.string().required(),
                    AWS_ACCESS_KEY_ID: Joi.string().required(),
                    AWS_SECRET_ACCESS_KEY: Joi.string().required()
                }),
            }),
            homeless_module_1.HomelessModule, service_org_module_1.ServiceOrgModule, case_management_module_1.CaseManagementModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, core_1.ProcessFileService, core_1.ProcessDataService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map