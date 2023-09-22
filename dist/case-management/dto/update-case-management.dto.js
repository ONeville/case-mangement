"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCaseManagementDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_case_management_dto_1 = require("./create-case-management.dto");
class UpdateCaseManagementDto extends (0, mapped_types_1.PartialType)(create_case_management_dto_1.CreateCaseManagementDto) {
}
exports.UpdateCaseManagementDto = UpdateCaseManagementDto;
//# sourceMappingURL=update-case-management.dto.js.map