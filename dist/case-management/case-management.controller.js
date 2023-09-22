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
exports.CaseManagementController = void 0;
const common_1 = require("@nestjs/common");
const case_management_service_1 = require("./case-management.service");
let CaseManagementController = class CaseManagementController {
    constructor(caseManagementService) {
        this.caseManagementService = caseManagementService;
    }
    add(createCaseManagementDto) {
        return this.caseManagementService.addCase(createCaseManagementDto);
    }
    async getCases() {
        return await this.caseManagementService.getCases();
    }
};
exports.CaseManagementController = CaseManagementController;
__decorate([
    (0, common_1.Post)('add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CaseManagementController.prototype, "add", null);
__decorate([
    (0, common_1.Get)('getCases'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CaseManagementController.prototype, "getCases", null);
exports.CaseManagementController = CaseManagementController = __decorate([
    (0, common_1.Controller)('case-management'),
    __metadata("design:paramtypes", [case_management_service_1.CaseManagementService])
], CaseManagementController);
//# sourceMappingURL=case-management.controller.js.map