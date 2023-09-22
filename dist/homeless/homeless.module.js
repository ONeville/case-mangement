"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomelessModule = void 0;
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
const homeless_service_1 = require("./homeless.service");
const homeless_controller_1 = require("./homeless.controller");
const core_1 = require("../core");
let HomelessModule = class HomelessModule {
};
exports.HomelessModule = HomelessModule;
exports.HomelessModule = HomelessModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule],
        controllers: [homeless_controller_1.HomelessController],
        providers: [homeless_service_1.HomelessService, core_1.ProcessFileService, core_1.ProcessDataService],
    })
], HomelessModule);
//# sourceMappingURL=homeless.module.js.map