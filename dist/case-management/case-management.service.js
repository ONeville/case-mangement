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
exports.CaseManagementService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("../core");
let CaseManagementService = class CaseManagementService {
    constructor(dataService) {
        this.dataService = dataService;
    }
    async addCase(record) {
        const payload = {
            "createdDate": {
                "S": record.createdDate,
            },
            "requestUser": {
                "M": record.requestUser,
            },
            "services": {
                "M": record.services,
            },
            "host": {
                "M": record.host,
            },
            "status": {
                "S": record.status,
            },
            "comments": {
                "S": record.comments,
            },
            "lastUpdateDate": {
                "S": record.lastUpdateDate,
            },
            "id": {
                "S": record.id,
            },
            "caseId": {
                "S": record.caseId,
            }
        };
        try {
            const result = await this.dataService.addOne('case-management', payload);
            return result;
        }
        catch (error) {
            console.log('Exception: ', error);
            throw new Error(`Error inserting record into DynamoDB: ${error.message}`);
        }
    }
    async getCases() {
        const mapObjScalarType = (data) => Object.keys(data).reduce((prev, curr) => {
            prev[curr] = data[curr]['S'] ? data[curr]['S'] : data[curr]['N'];
            return prev;
        }, {});
        const mapObj = (data) => Object.keys(data).reduce((prev, curr) => {
            prev[curr] = data[curr]['M'] ? mapObjScalarType(data[curr]['M']) : data[curr]['S'] ? data[curr]['S'] : data[curr]['N'];
            return prev;
        }, {});
        try {
            const result = await this.dataService.getData('case-management');
            return result.map(d => mapObj(d));
        }
        catch (error) {
            console.log('Exception: ', error);
            throw new Error(`Error inserting record into DynamoDB: ${error.message}`);
        }
    }
};
exports.CaseManagementService = CaseManagementService;
exports.CaseManagementService = CaseManagementService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.ProcessDataService])
], CaseManagementService);
//# sourceMappingURL=case-management.service.js.map