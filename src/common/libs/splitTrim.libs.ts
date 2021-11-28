import { TireInfoDto } from 'src/tires/dto/tireInfo.dto';
import { TrimInfoDto } from 'src/trims/dto/trimInfo.dto';

export class splitTrim {
  private frontTireValue: object;
  private rearTireValue: object;

  constructor(private tireValue, private user) {
    this.frontTireValue = tireValue.frontTireValue;
    this.rearTireValue = tireValue.rearTireValue;
  }

  private splitTireValue(tireValues) {
    return tireValues.split(/\/|\D/).map((num) => parseInt(num));
  }

  private trimInfo() {
    return new TrimInfoDto(
      this.tireValue.trimId,
      this.tireValue.trimName,
      this.user.id,
    );
  }

  private frontTireInfo() {
    const [width, aspectRatio, diameter] = this.splitTireValue(
      this.frontTireValue,
    );

    return new TireInfoDto(
      this.tireValue.frontTireName,
      width,
      aspectRatio,
      diameter,
      this.tireValue.frontTireUnit,
      this.tireValue.frontTireMultiValues,
      this.tireValue.trimId,
    );
  }

  private rearTireInfo() {
    const [width, aspectRatio, diameter] = this.splitTireValue(
      this.rearTireValue,
    );

    return new TireInfoDto(
      this.tireValue.rearTireName,
      width,
      aspectRatio,
      diameter,
      this.tireValue.rearTireUnit,
      this.tireValue.rearTireMultiValues,
      this.tireValue.trimId,
    );
  }

  init() {
    const trimInfo = this.trimInfo();
    const frontTire = this.frontTireInfo();
    const rearTire = this.rearTireInfo();

    return { trimInfo, frontTire, rearTire };
  }
}
