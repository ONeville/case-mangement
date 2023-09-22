"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateServiceOrgDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_service_org_dto_1 = require("./create-service-org.dto");
class UpdateServiceOrgDto extends (0, mapped_types_1.PartialType)(create_service_org_dto_1.CreateServiceOrgDto) {
}
exports.UpdateServiceOrgDto = UpdateServiceOrgDto;
//# sourceMappingURL=update-service-org.dto.js.map