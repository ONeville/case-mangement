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
exports.HomelessController = void 0;
const common_1 = require("@nestjs/common");
const homeless_service_1 = require("./homeless.service");
const core_1 = require("../core");
const data_1 = require("../core/services/data");
let HomelessController = class HomelessController {
    constructor(homelessService, fileService, dataService) {
        this.homelessService = homelessService;
        this.fileService = fileService;
        this.dataService = dataService;
    }
    async loadDummy() {
        const data = this.fileService.mapData(data_1.dataDumper);
        await this.dataService.batchInsert('cabins', data.cabins);
        return data.cabins;
    }
    addCabin(request) {
        return this.homelessService.addOneCabin(request);
    }
    async getCabins() {
        return await this.homelessService.getCabins();
    }
    async checkS3() {
        return await this.fileService.getFileData();
    }
};
exports.HomelessController = HomelessController;
__decorate([
    (0, common_1.Post)('loadDummyUsers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HomelessController.prototype, "loadDummy", null);
__decorate([
    (0, common_1.Post)('addCabin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], HomelessController.prototype, "addCabin", null);
__decorate([
    (0, common_1.Get)('getCabins'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HomelessController.prototype, "getCabins", null);
__decorate([
    (0, common_1.Get)('checkS3'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HomelessController.prototype, "checkS3", null);
exports.HomelessController = HomelessController = __decorate([
    (0, common_1.Controller)('homeless'),
    __metadata("design:paramtypes", [homeless_service_1.HomelessService, core_1.ProcessFileService,
        core_1.ProcessDataService])
], HomelessController);
//# sourceMappingURL=homeless.controller.js.map