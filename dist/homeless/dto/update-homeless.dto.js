"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateHomelessDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_homeless_dto_1 = require("./create-homeless.dto");
class UpdateHomelessDto extends (0, mapped_types_1.PartialType)(create_homeless_dto_1.CreateHomelessDto) {
}
exports.UpdateHomelessDto = UpdateHomelessDto;
//# sourceMappingURL=update-homeless.dto.js.map