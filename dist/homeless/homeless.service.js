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
exports.HomelessService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("../core");
let HomelessService = class HomelessService {
    constructor(dataService) {
        this.dataService = dataService;
        this.tableName = 'homeless-user';
    }
    async addOneCabin(record) {
        const payload = {
            "city": {
                "S": record.city
            },
            "location": {
                "S": record.location
            },
            "cabinId": {
                "S": record.cabinId.toString()
            },
            "site": {
                "S": record.site
            },
            "id": {
                "S": record.id
            },
            "zipCode": {
                "N": record.zipCode.toString()
            }
        };
        try {
            const result = await this.dataService.addOne('cabins', payload);
            return result;
        }
        catch (error) {
            console.log('Exception: ', error);
            throw new Error(`Error inserting record into DynamoDB: ${error.message}`);
        }
    }
    async getCabins() {
        const mapObj = (data) => Object.keys(data).reduce((prev, curr) => {
            prev[curr] = data[curr]['S'] ? data[curr]['S'] : data[curr]['N'];
            return prev;
        }, {});
        try {
            const result = await this.dataService.getData('cabins');
            return result.map(d => mapObj(d));
        }
        catch (error) {
            console.log('Exception: ', error);
            throw new Error(`Error inserting record into DynamoDB: ${error.message}`);
        }
    }
    async getCase() {
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
            return result;
        }
        catch (error) {
            console.log('Exception: ', error);
            throw new Error(`Error inserting record into DynamoDB: ${error.message}`);
        }
    }
};
exports.HomelessService = HomelessService;
exports.HomelessService = HomelessService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.ProcessDataService])
], HomelessService);
//# sourceMappingURL=homeless.service.js.map