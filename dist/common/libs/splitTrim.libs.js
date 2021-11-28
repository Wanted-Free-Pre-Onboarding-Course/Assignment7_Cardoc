"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitTrim = void 0;
const tireInfo_dto_1 = require("../../tires/dto/tireInfo.dto");
const trimInfo_dto_1 = require("../../trims/dto/trimInfo.dto");
class splitTrim {
    constructor(tireValue, user) {
        this.tireValue = tireValue;
        this.user = user;
        this.frontTireValue = tireValue.frontTireValue;
        this.rearTireValue = tireValue.rearTireValue;
    }
    splitTireValue(tireValues) {
        return tireValues.split(/\/|\D/).map((num) => parseInt(num));
    }
    trimInfo() {
        return new trimInfo_dto_1.TrimInfoDto(this.tireValue.trimId, this.tireValue.trimName, this.user.id);
    }
    frontTireInfo() {
        const [width, aspectRatio, diameter] = this.splitTireValue(this.frontTireValue);
        return new tireInfo_dto_1.TireInfoDto(this.tireValue.frontTireName, width, aspectRatio, diameter, this.tireValue.frontTireUnit, this.tireValue.frontTireMultiValues, this.tireValue.trimId);
    }
    rearTireInfo() {
        const [width, aspectRatio, diameter] = this.splitTireValue(this.rearTireValue);
        return new tireInfo_dto_1.TireInfoDto(this.tireValue.rearTireName, width, aspectRatio, diameter, this.tireValue.rearTireUnit, this.tireValue.rearTireMultiValues, this.tireValue.trimId);
    }
    init() {
        const trimInfo = this.trimInfo();
        const frontTire = this.frontTireInfo();
        const rearTire = this.rearTireInfo();
        return { trimInfo, frontTire, rearTire };
    }
}
exports.splitTrim = splitTrim;
//# sourceMappingURL=splitTrim.libs.js.map