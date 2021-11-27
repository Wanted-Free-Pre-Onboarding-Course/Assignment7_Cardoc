import axios from 'axios';
import { TRIMS_CONSTANTS } from 'src/trims/constants/trim.constants';
import { InternalServerErrorException } from '@nestjs/common';

export const myCarJobs = async (_trimId: number) => {
  try {
    const id = _trimId;
    const url = `${TRIMS_CONSTANTS.CAR_SPEC_API_URL}${id}`;
    const res = await axios.get(url);
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
  } catch (err) {
    throw new InternalServerErrorException();
  }
};
