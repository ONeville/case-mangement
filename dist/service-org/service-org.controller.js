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
exports.ServiceOrgController = void 0;
const common_1 = require("@nestjs/common");
const service_org_service_1 = require("./service-org.service");
const create_service_org_dto_1 = require("./dto/create-service-org.dto");
const update_service_org_dto_1 = require("./dto/update-service-org.dto");
let ServiceOrgController = class ServiceOrgController {
    constructor(serviceOrgService) {
        this.serviceOrgService = serviceOrgService;
    }
    create(createServiceOrgDto) {
        return this.serviceOrgService.create(createServiceOrgDto);
    }
    findAll() {
        return this.serviceOrgService.findAll();
    }
    findOne(id) {
        return this.serviceOrgService.findOne(+id);
    }
    update(id, updateServiceOrgDto) {
        return this.serviceOrgService.update(+id, updateServiceOrgDto);
    }
    remove(id) {
        return this.serviceOrgService.remove(+id);
    }
};
exports.ServiceOrgController = ServiceOrgController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_service_org_dto_1.CreateServiceOrgDto]),
    __metadata("design:returntype", void 0)
], ServiceOrgController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ServiceOrgController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ServiceOrgController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_service_org_dto_1.UpdateServiceOrgDto]),
    __metadata("design:returntype", void 0)
], ServiceOrgController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ServiceOrgController.prototype, "remove", null);
exports.ServiceOrgController = ServiceOrgController = __decorate([
    (0, common_1.Controller)('service-org'),
    __metadata("design:paramtypes", [service_org_service_1.ServiceOrgService])
], ServiceOrgController);
//# sourceMappingURL=service-org.controller.js.map