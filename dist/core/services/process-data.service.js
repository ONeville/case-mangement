"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessDataService = void 0;
const common_1 = require("@nestjs/common");
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
let ProcessDataService = class ProcessDataService {
    constructor() {
        this.dynamoDB = new client_dynamodb_1.DynamoDB();
    }
    async addOne(tableName, record) {
        const params = {
            TableName: tableName,
            Item: record,
        };
        try {
            const result = await this.dynamoDB.putItem(params);
            return result;
        }
        catch (error) {
            console.log('Exception: ', error);
            throw new Error(`Error inserting record into ${tableName} DynamoDB: ${error.message}`);
        }
    }
    async batchInsert(tableName, records) {
        const params = {
            RequestItems: {
                [tableName]: records.map((record) => ({
                    PutRequest: {
                        Item: record,
                    },
                })),
            },
        };
        try {
            await this.dynamoDB.batchWriteItem(params);
        }
        catch (error) {
            throw new Error(`Error inserting records into ${tableName} DynamoDB: ${error.message}`);
        }
    }
    async getData(tableName) {
        const params = {
            TableName: tableName,
        };
        try {
            const data = await this.dynamoDB.scan(params);
            this.dynamoDB;
            return data.Items;
        }
        catch (error) {
            throw new Error(`Error fetching ${tableName} from DynamoDB: ${error.message}`);
        }
    }
};
exports.ProcessDataService = ProcessDataService;
exports.ProcessDataService = ProcessDataService = __decorate([
    (0, common_1.Injectable)()
], ProcessDataService);
//# sourceMappingURL=process-data.service.js.map