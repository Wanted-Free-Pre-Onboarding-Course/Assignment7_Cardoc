"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myCarJobs = void 0;
const axios_1 = require("axios");
const trim_constants_1 = require("../../trims/constants/trim.constants");
const common_1 = require("@nestjs/common");
const myCarJobs = async (_trimId) => {
    try {
        const id = _trimId;
        const url = `${trim_constants_1.TRIMS_CONSTANTS.CAR_SPEC_API_URL}${id}`;
        const res = await axios_1.default.get(url);
        const { trimId, trimName, spec } = res.data;
        const frontTire = spec.driving.frontTire;
        const rearTire = spec.driving.rearTire;
        const requiredValues = {
            trimId,
            trimName,
            frontTireName: frontTire.name,
            frontTireValue: frontTire.value,
            frontTireUnit: frontTire.unit,
            frontTireMultiValues: frontTire.multiValues,
            rearTireName: rearTire.name,
            rearTireValue: rearTire.value,
            rearTireUnit: rearTire.unit,
            rearTireMultiValues: rearTire.multiValues,
        };
        return requiredValues;
    }
    catch (err) {
        throw new common_1.InternalServerErrorException();
    }
};
exports.myCarJobs = myCarJobs;
//# sourceMappingURL=mycar.jobs.js.map