"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseManagementModule = void 0;
const common_1 = require("@nestjs/common");
const case_management_service_1 = require("./case-management.service");
const case_management_controller_1 = require("./case-management.controller");
const core_1 = require("../core");
let CaseManagementModule = class CaseManagementModule {
};
exports.CaseManagementModule = CaseManagementModule;
exports.CaseManagementModule = CaseManagementModule = __decorate([
    (0, common_1.Module)({
        controllers: [case_management_controller_1.CaseManagementController],
        providers: [case_management_service_1.CaseManagementService, core_1.ProcessDataService],
    })
], CaseManagementModule);
//# sourceMappingURL=case-management.module.js.map