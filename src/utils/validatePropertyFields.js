import validateSchema from './validateSchema.js';
import {
  propertyBasicsSchema,
  propertyRentApartmentSchema,
  propertyRentChaletSchema,
  propertyRentTerrainSchema,
  propertyRentHouseBuildingSchema,
  propertySellApartmentSchema,
  propertySellChaletSchema,
  propertySellTerrainSchema,
  propertySellHouseBuildingSchema,
  propertyRentSellApartmentSchema,
  propertyRentSellChaletSchema,
  propertyRentSellTerrainSchema,
  propertyRentSellHouseBuildingSchema,
} from '#Schemas/property.js';

export default function validatePropertyFields(fields) {
  if (
    fields.rentSell.toLowerCase() === 'rentsell' &&
    fields.propertyType.toLowerCase() === 'apartment'
  ) {
    const validate = validateSchema(propertyRentSellApartmentSchema, fields);
    return validate;
  } else if (
    fields.rentSell.toLowerCase() === 'rentsell' &&
    fields.propertyType.toLowerCase() === 'chalet'
  ) {
    const validate = validateSchema(propertyRentSellChaletSchema, fields);
    return validate;
  } else if (
    fields.rentSell.toLowerCase() === 'rentsell' &&
    fields.propertyType.toLowerCase() === 'terrain'
  ) {
    const validate = validateSchema(propertyRentSellTerrainSchema, fields);
    return validate;
  } else if (
    fields.rentSell.toLowerCase() === 'rentsell' &&
    (fields.propertyType.toLowerCase() === 'house' ||
      fields.propertyType.toLowerCase() === 'building')
  ) {
    const validate = validateSchema(
      propertyRentSellHouseBuildingSchema,
      fields,
    );
    return validate;
  } else if (
    fields.rentSell.toLowerCase() === 'rent' &&
    fields.propertyType.toLowerCase() === 'apartment'
  ) {
    const validate = validateSchema(propertyRentApartmentSchema, fields);
    return validate;
  } else if (
    fields.rentSell.toLowerCase() === 'sell' &&
    fields.propertyType.toLowerCase() === 'apartment'
  ) {
    const validate = validateSchema(propertySellApartmentSchema, fields);
    return validate;
  } else if (
    fields.rentSell.toLowerCase() === 'rent' &&
    fields.propertyType.toLowerCase() === 'chalet'
  ) {
    const validate = validateSchema(propertyRentChaletSchema, fields);
    return validate;
  } else if (
    fields.rentSell.toLowerCase() === 'sell' &&
    fields.propertyType.toLowerCase() === 'chalet'
  ) {
    const validate = validateSchema(propertySellChaletSchema, fields);
    return validate;
  } else if (
    fields.rentSell.toLowerCase() === 'rent' &&
    fields.propertyType.toLowerCase() === 'terrain'
  ) {
    const validate = validateSchema(propertyRentTerrainSchema, fields);
    return validate;
  } else if (
    fields.rentSell.toLowerCase() === 'sell' &&
    fields.propertyType.toLowerCase() === 'terrain'
  ) {
    const validate = validateSchema(propertySellTerrainSchema, fields);
    return validate;
  } else if (
    fields.rentSell.toLowerCase() === 'rent' &&
    (fields.propertyType.toLowerCase() === 'house' ||
      fields.propertyType.toLowerCase() === 'building')
  ) {
    const validate = validateSchema(propertyRentHouseBuildingSchema, fields);
    return validate;
  } else if (
    fields.rentSell.toLowerCase() === 'sell' &&
    (fields.propertyType.toLowerCase() === 'house' ||
      fields.propertyType.toLowerCase() === 'building')
  ) {
    const validate = validateSchema(propertySellHouseBuildingSchema, fields);
    return validate;
  } else {
    const validate = validateSchema(propertyBasicsSchema, fields);
    return validate;
  }
}
