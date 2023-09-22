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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessFileService = void 0;
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
const aws_sdk_1 = require("aws-sdk");
const __1 = require("..");
let ProcessFileService = class ProcessFileService {
    constructor(configService) {
        this.configService = configService;
        this.s3 = new aws_sdk_1.S3();
    }
    async getFileData() {
        const params = {
            Bucket: this.configService.get('AWS_PUBLIC_BUCKET_NAME'),
            Key: 'data-dump.csv',
        };
        try {
            const data = await this.s3.getObject(params).promise();
            return data.Body;
        }
        catch (error) {
            throw new Error('Error reading Excel file from S3');
        }
    }
    mapData(data) {
        const cabins = data.map((d, i) => ({
            id: Date.now() + '-' + Math.round(Math.random() * 1e9) + i + 1,
            cabinId: d.Cabin,
            location: 'CA-' + __1.AppUtils.generateRandomWord(5),
            site: 'AD-Philadelphia-' + __1.AppUtils.generateRandomNumber(1, i + 1),
            city: 'Philadelphia',
            zipCode: 210321,
        }));
        const users = data.map((d, i) => ({
            firstName: d.FirstName,
            lastName: d.LastName,
            dob: __1.AppUtils.generateRandomDOB(23, 65),
            phone: d.Phone,
            id: Math.round(Math.random() * 1e9) + i + 1,
        }));
        return { cabins, users };
    }
};
exports.ProcessFileService = ProcessFileService;
exports.ProcessFileService = ProcessFileService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], ProcessFileService);
//# sourceMappingURL=process-file.service.js.map