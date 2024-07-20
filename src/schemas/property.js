import {
  uuid,
  string,
  number,
  boolean,
  minValue,
  maxValue,
  minLength,
  maxLength,
  toTrimmed,
  toLowerCase,
  optional,
  object,
} from 'valibot';

export const checkIdAndUserIdSchema = object({
  id: string('El ID del inmueble debe ser de tipo uuid', [
    uuid('El ID del inmueble debe ser de tipo UUID'),
  ]),
  userId: string('El ID del usuario debe ser de tipo uuid', [
    uuid('El ID del usuario debe ser de tipo UUID'),
  ]),
});

export const propertyBasicsSchema = object({
  id: optional(
    string('El ID del inmueble debe ser de tipo uuid', [
      uuid('El ID del inmueble debe ser de tipo UUID'),
    ]),
  ),
  title: string('El título debe ser de tipo string', [
    toTrimmed(),
    minLength(1, 'El título no debe estar vacío'),
    maxLength(255, 'El título es demasiado grande'),
  ]),
  conditionsSpecials: string(
    'Las condiciones especiales debe ser de tipo string',
    [
      toTrimmed(),
      toLowerCase(),
      minLength(1, 'Selecciona una de las condiciones especiales'),
    ],
  ),
  address: string('La dirección debe ser de tipo string', [
    toTrimmed(),
    minLength(1, 'La dirección no debe estar vacía'),
  ]),
  postal: string('El código postal debe ser de tipo string', [
    minLength(1, 'El código postal no debe estar vacío'),
  ]),
  city: string('La población debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'La población no debe estar vacía'),
  ]),
  country: string('El país debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona un país'),
  ]),
  region: string('La región debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona una región'),
  ]),
  rentSell: string('El aquiler o venta debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona un tipo de anuncio (Alquiler o Venta)'),
  ]),
  propertyType: string('El tipo de propiedad debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona el tipo de propiedad'),
  ]),
  userId: string('El ID del usuario debe ser de tipo uuid', [
    uuid('El ID del usuario debe ser de tipo UUID'),
  ]),
});

export const propertyRentApartmentSchema = object({
  id: optional(
    string('El ID del inmueble debe ser de tipo uuid', [
      uuid('El ID del inmueble debe ser de tipo UUID'),
    ]),
  ),
  title: string('El título debe ser de tipo string', [
    toTrimmed(),
    minLength(1, 'El título no debe estar vacío'),
    maxLength(255, 'El título es demasiado grande'),
  ]),
  description: optional(
    string('La descripción debe ser de tipo string', [
      toTrimmed(),
      maxLength(255, 'La descripción es demasiado grande'),
    ]),
  ),
  conditionsSpecials: string(
    'Las condiciones especiales debe ser de tipo string',
    [
      toTrimmed(),
      toLowerCase(),
      minLength(1, 'Selecciona una de las condiciones especiales'),
    ],
  ),
  address: string('La dirección debe ser de tipo string', [
    toTrimmed(),
    minLength(1, 'La dirección no debe estar vacía'),
  ]),
  postal: string('El código postal debe ser de tipo string', [
    minLength(1, 'El código postal no debe estar vacío'),
  ]),
  city: string('La población debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'La población no debe estar vacía'),
  ]),
  country: string('El país debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona un país'),
  ]),
  region: string('La región debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona una región'),
  ]),
  propertyHideAddress: optional(
    boolean('Ocultar la dirección debe ser de tipo boolean'),
  ),
  rentSell: string('El aquiler o venta debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona un tipo de anuncio (Alquiler o Venta)'),
  ]),
  rentPrice: number('El precio del alquiler debe ser de tipo number', [
    minValue(1, 'El precio del alquiler no debe estar vacío'),
    maxValue(2_000_000_000, 'El precio del alquiler es demasiado grande'),
  ]),
  optionalBuy: optional(boolean('La compra opcional debe ser de tipo boolean')),
  rerent: optional(boolean('El realquiler debe ser de tipo boolean')),
  propertyType: string('El tipo de propiedad debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona el tipo de propiedad'),
  ]),
  propertyCondition: string('Estado del inmueble debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona un estado del inmueble'),
  ]),
  propertySize: number('El tamaño del inmueble debe ser de tipo number', [
    minValue(1, 'El tamaño del inmueble no debe estar vacío'),
  ]),
  energyCertificate: string(
    'El certificado energético debe ser de tipo string',
    [
      toTrimmed(),
      toLowerCase(),
      minLength(1, 'Selecciona un certificado energético'),
    ],
  ),
  elevator: string('El ascensor debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona si el inmueble tiene ascensor'),
  ]),
  furnished: string('Muebles debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona si el inmueble está amueblado'),
  ]),
  parking: string('El aparcamiento debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona el tipo de aparcamiento'),
  ]),
  pool: string('La piscina debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona un tipo de piscina'),
  ]),
  rooms: number('El número de habitaciones debe ser de tipo number', [
    minValue(0, 'El número de habitaciones no debe estar vacío'),
  ]),
  baths: number('El número de baños debe ser de tipo number', [
    minValue(0, 'El número de baños no debe estar vacío'),
  ]),
  visible: optional(boolean('Visible debe ser de tipo boolean')),
  userId: string('El ID del usuario debe ser de tipo uuid', [
    uuid('El ID del usuario debe ser de tipo UUID'),
  ]),
});

export const propertySellApartmentSchema = object({
  id: optional(
    string('El ID del inmueble debe ser de tipo uuid', [
      uuid('El ID del inmueble debe ser de tipo UUID'),
    ]),
  ),
  title: string('El título debe ser de tipo string', [
    toTrimmed(),
    minLength(1, 'El título no debe estar vacío'),
    maxLength(255, 'El título es demasiado grande'),
  ]),
  description: optional(
    string('La descripción debe ser de tipo string', [
      toTrimmed(),
      maxLength(255, 'La descripción es demasiado grande'),
    ]),
  ),
  conditionsSpecials: string(
    'Las condiciones especiales debe ser de tipo string',
    [
      toTrimmed(),
      toLowerCase(),
      minLength(1, 'Selecciona una de las condiciones especiales'),
    ],
  ),
  address: string('La dirección debe ser de tipo string', [
    toTrimmed(),
    minLength(1, 'La dirección no debe estar vacía'),
  ]),
  postal: string('El código postal debe ser de tipo string', [
    minLength(1, 'El código postal no debe estar vacío'),
  ]),
  city: string('La población debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'La población no debe estar vacía'),
  ]),
  country: string('El país debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona un país'),
  ]),
  region: string('La región debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona una región'),
  ]),
  propertyHideAddress: optional(
    boolean('Ocultar la dirección debe ser de tipo boolean'),
  ),
  rentSell: string('El aquiler o venta debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona un tipo de anuncio (Alquiler o Venta)'),
  ]),
  sellPrice: number('El precio de la venta debe ser de tipo number', [
    minValue(1, 'El precio de la venta no debe estar vacío'),
    maxValue(2_000_000_000, 'El precio de la venta es demasiado grande'),
  ]),
  sellPriceArv: number(
    'El precio de la revalorización debe ser de tipo number',
    [minValue(0, 'El precio de la revalorización no debe estar vacío')],
  ),
  jointVenture: optional(boolean('El Joint Venture debe ser de tipo boolean')),
  optionalFinance: optional(boolean('Pago a plazos debe ser de tipo boolean')),
  financeInitPayment: optional(
    number('El pago inicial debe ser de tipo number', [
      minValue(1, 'El pago inicial no debe estar vacío'),
    ]),
  ),
  financeYears: optional(
    number('El número de años debe ser tipo number', [
      minValue(1, 'El número de años no debe estar vacío'),
    ]),
  ),
  financeInterest: optional(
    number('El interés debe ser de tipo number', [
      minValue(1, 'El interés no debe estar vacío'),
    ]),
  ),
  monthPayment: optional(
    number('La cuota mensual debe se de tipo number', [
      minValue(1, 'La cuota mensual no debe estar vacío'),
    ]),
  ),
  propertyType: string('El tipo de propiedad debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona el tipo de propiedad'),
  ]),
  propertyCondition: string('Estado del inmueble debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona un estado del inmueble'),
  ]),
  propertySize: number('El tamaño del inmueble debe ser de tipo number', [
    minValue(1, 'El tamaño del inmueble no debe estar vacío'),
  ]),
  energyCertificate: string(
    'El certificado energético debe ser de tipo string',
    [
      toTrimmed(),
      toLowerCase(),
      minLength(1, 'Selecciona un certificado energético'),
    ],
  ),
  elevator: string('El ascensor debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona si el inmueble tiene ascensor'),
  ]),
  furnished: string('Muebles debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona si el inmueble está amueblado'),
  ]),
  parking: string('El aparcamiento debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona el tipo de aparcamiento'),
  ]),
  pool: string('La piscina debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona un tipo de piscina'),
  ]),
  rooms: number('El número de habitaciones debe ser de tipo number', [
    minValue(0, 'El número de habitaciones no debe estar vacío'),
  ]),
  baths: number('El número de baños debe ser de tipo number', [
    minValue(0, 'El número de baños no debe estar vacío'),
  ]),
  visible: optional(boolean('Visible debe ser de tipo boolean')),
  userId: string('El ID del usuario debe ser de tipo uuid', [
    uuid('El ID del usuario debe ser de tipo UUID'),
  ]),
});

export const propertyRentChaletSchema = object({
  id: optional(
    string('El ID del inmueble debe ser de tipo uuid', [
      uuid('El ID del inmueble debe ser de tipo UUID'),
    ]),
  ),
  title: string('El título debe ser de tipo string', [
    toTrimmed(),
    minLength(1, 'El título no debe estar vacío'),
    maxLength(255, 'El título es demasiado grande'),
  ]),
  description: optional(
    string('La descripción debe ser de tipo string', [
      toTrimmed(),
      maxLength(255, 'La descripción es demasiado grande'),
    ]),
  ),
  conditionsSpecials: string(
    'Las condiciones especiales debe ser de tipo string',
    [
      toTrimmed(),
      toLowerCase(),
      minLength(1, 'Selecciona una de las condiciones especiales'),
    ],
  ),
  address: string('La dirección debe ser de tipo string', [
    toTrimmed(),
    minLength(1, 'La dirección no debe estar vacía'),
  ]),
  postal: string('El código postal debe ser de tipo string', [
    minLength(1, 'El código postal no debe estar vacío'),
  ]),
  city: string('La población debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'La población no debe estar vacía'),
  ]),
  country: string('El país debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona un país'),
  ]),
  region: string('La región debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona una región'),
  ]),
  propertyHideAddress: optional(
    boolean('Ocultar la dirección debe ser de tipo boolean'),
  ),
  rentSell: string('El aquiler o venta debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona un tipo de anuncio (Alquiler o Venta)'),
  ]),
  rentPrice: number('El precio del alquiler debe ser de tipo number', [
    minValue(1, 'El precio del alquiler no debe estar vacío'),
    maxValue(2_000_000_000, 'El precio del alquiler es demasiado grande'),
  ]),
  optionalBuy: optional(boolean('La compra opcional debe ser de tipo boolean')),
  rerent: optional(boolean('El realquiler debe ser de tipo boolean')),
  propertyType: string('El tipo de propiedad debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona el tipo de propiedad'),
  ]),
  propertyCondition: string('Estado del inmueble debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona un estado del inmueble'),
  ]),
  propertySize: number('El tamaño del inmueble debe ser de tipo number', [
    minValue(1, 'El tamaño del inmueble no debe estar vacío'),
  ]),
  propertySizeTerrain: number('El tamaño del terreno debe ser de tipo number', [
    minValue(1, 'El tamaño del terreno no debe estar vacío'),
  ]),
  energyCertificate: string(
    'El certificado energético debe ser de tipo string',
    [
      toTrimmed(),
      toLowerCase(),
      minLength(1, 'Selecciona un certificado energético'),
    ],
  ),
  furnished: string('Muebles debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona si el inmueble está amueblado'),
  ]),
  parking: string('El aparcamiento debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona el tipo de aparcamiento'),
  ]),
  pool: string('La piscina debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona un tipo de piscina'),
  ]),
  rooms: number('El número de habitaciones debe ser de tipo number', [
    minValue(0, 'El número de habitaciones no debe estar vacío'),
  ]),
  baths: number('El número de baños debe ser de tipo number', [
    minValue(0, 'El número de baños no debe estar vacío'),
  ]),
  visible: optional(boolean('Visible debe ser de tipo boolean')),
  userId: string('El ID del usuario debe ser de tipo uuid', [
    uuid('El ID del usuario debe ser de tipo UUID'),
  ]),
});

export const propertySellChaletSchema = object({
  id: optional(
    string('El ID del inmueble debe ser de tipo uuid', [
      uuid('El ID del inmueble debe ser de tipo UUID'),
    ]),
  ),
  title: string('El título debe ser de tipo string', [
    toTrimmed(),
    minLength(1, 'El título no debe estar vacío'),
    maxLength(255, 'El título es demasiado grande'),
  ]),
  description: optional(
    string('La descripción debe ser de tipo string', [
      toTrimmed(),
      maxLength(255, 'La descripción es demasiado grande'),
    ]),
  ),
  conditionsSpecials: string(
    'Las condiciones especiales debe ser de tipo string',
    [
      toTrimmed(),
      toLowerCase(),
      minLength(1, 'Selecciona una de las condiciones especiales'),
    ],
  ),
  address: string('La dirección debe ser de tipo string', [
    toTrimmed(),
    minLength(1, 'La dirección no debe estar vacía'),
  ]),
  postal: string('El código postal debe ser de tipo string', [
    minLength(1, 'El código postal no debe estar vacío'),
  ]),
  city: string('La población debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'La población no debe estar vacía'),
  ]),
  country: string('El país debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona un país'),
  ]),
  region: string('La región debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona una región'),
  ]),
  propertyHideAddress: optional(
    boolean('Ocultar la dirección debe ser de tipo boolean'),
  ),
  rentSell: string('El aquiler o venta debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona un tipo de anuncio (Alquiler o Venta)'),
  ]),
  sellPrice: number('El precio de la venta debe ser de tipo number', [
    minValue(1, 'El precio de la venta no debe estar vacío'),
    maxValue(2_000_000_000, 'El precio de la venta es demasiado grande'),
  ]),
  sellPriceArv: number(
    'El precio de la revalorización debe ser de tipo number',
    [minValue(0, 'El precio de la revalorización no debe estar vacío')],
  ),
  jointVenture: optional(boolean('El Joint Venture debe ser de tipo boolean')),
  optionalFinance: optional(boolean('Pago a plazos debe ser de tipo boolean')),
  financeInitPayment: optional(
    number('El pago inicial debe ser de tipo number', [
      minValue(1, 'El pago inicial no debe estar vacío'),
    ]),
  ),
  financeYears: optional(
    number('El número de años debe ser tipo number', [
      minValue(1, 'El número de años no debe estar vacío'),
    ]),
  ),
  financeInterest: optional(
    number('El interés debe ser de tipo number', [
      minValue(1, 'El interés no debe estar vacío'),
    ]),
  ),
  monthPayment: optional(
    number('La cuota mensual debe se de tipo number', [
      minValue(1, 'La cuota mensual no debe estar vacío'),
    ]),
  ),
  propertyType: string('El tipo de propiedad debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona el tipo de propiedad'),
  ]),
  propertyCondition: string('Estado del inmueble debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona un estado del inmueble'),
  ]),
  propertySize: number('El tamaño del inmueble debe ser de tipo number', [
    minValue(1, 'El tamaño del inmueble no debe estar vacío'),
  ]),
  propertySizeTerrain: number('El tamaño del terreno debe ser de tipo number', [
    minValue(1, 'El tamaño del terreno no debe estar vacío'),
  ]),
  energyCertificate: string(
    'El certificado energético debe ser de tipo string',
    [
      toTrimmed(),
      toLowerCase(),
      minLength(1, 'Selecciona un certificado energético'),
    ],
  ),
  furnished: string('Muebles debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona si el inmueble está amueblado'),
  ]),
  parking: string('El aparcamiento debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona el tipo de aparcamiento'),
  ]),
  pool: string('La piscina debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona un tipo de piscina'),
  ]),
  rooms: number('El número de habitaciones debe ser de tipo number', [
    minValue(0, 'El número de habitaciones no debe estar vacío'),
  ]),
  baths: number('El número de baños debe ser de tipo number', [
    minValue(0, 'El número de baños no debe estar vacío'),
  ]),
  visible: optional(boolean('Visible debe ser de tipo boolean')),
  userId: string('El ID del usuario debe ser de tipo uuid', [
    uuid('El ID del usuario debe ser de tipo UUID'),
  ]),
});

export const propertyRentTerrainSchema = object({
  id: optional(
    string('El ID del inmueble debe ser de tipo uuid', [
      uuid('El ID del inmueble debe ser de tipo UUID'),
    ]),
  ),
  title: string('El título debe ser de tipo string', [
    toTrimmed(),
    minLength(1, 'El título no debe estar vacío'),
    maxLength(255, 'El título es demasiado grande'),
  ]),
  description: optional(
    string('La descripción debe ser de tipo string', [
      toTrimmed(),
      maxLength(255, 'La descripción es demasiado grande'),
    ]),
  ),
  conditionsSpecials: string(
    'Las condiciones especiales debe ser de tipo string',
    [
      toTrimmed(),
      toLowerCase(),
      minLength(1, 'Selecciona una de las condiciones especiales'),
    ],
  ),
  address: string('La dirección debe ser de tipo string', [
    toTrimmed(),
    minLength(1, 'La dirección no debe estar vacía'),
  ]),
  postal: string('El código postal debe ser de tipo string', [
    minLength(1, 'El código postal no debe estar vacío'),
  ]),
  city: string('La población debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'La población no debe estar vacía'),
  ]),
  country: string('El país debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona un país'),
  ]),
  region: string('La región debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona una región'),
  ]),
  propertyHideAddress: optional(
    boolean('Ocultar la dirección debe ser de tipo boolean'),
  ),
  rentSell: string('El aquiler o venta debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona un tipo de anuncio (Alquiler o Venta)'),
  ]),
  rentPrice: number('El precio del alquiler debe ser de tipo number', [
    minValue(1, 'El precio del alquiler no debe estar vacío'),
    maxValue(2_000_000_000, 'El precio del alquiler es demasiado grande'),
  ]),
  optionalBuy: optional(boolean('La compra opcional debe ser de tipo boolean')),
  rerent: optional(boolean('El realquiler debe ser de tipo boolean')),
  propertyType: string('El tipo de propiedad debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona el tipo de propiedad'),
  ]),
  propertySizeTerrain: number('El tamaño del terreno debe ser de tipo number', [
    minValue(1, 'El tamaño del terreno no debe estar vacío'),
  ]),
  visible: optional(boolean('Visible debe ser de tipo boolean')),
  userId: string('El ID del usuario debe ser de tipo uuid', [
    uuid('El ID del usuario debe ser de tipo UUID'),
  ]),
});

export const propertySellTerrainSchema = object({
  id: optional(
    string('El ID del inmueble debe ser de tipo uuid', [
      uuid('El ID del inmueble debe ser de tipo UUID'),
    ]),
  ),
  title: string('El título debe ser de tipo string', [
    toTrimmed(),
    minLength(1, 'El título no debe estar vacío'),
    maxLength(255, 'El título es demasiado grande'),
  ]),
  description: optional(
    string('La descripción debe ser de tipo string', [
      toTrimmed(),
      maxLength(255, 'La descripción es demasiado grande'),
    ]),
  ),
  conditionsSpecials: string(
    'Las condiciones especiales debe ser de tipo string',
    [
      toTrimmed(),
      toLowerCase(),
      minLength(1, 'Selecciona una de las condiciones especiales'),
    ],
  ),
  address: string('La dirección debe ser de tipo string', [
    toTrimmed(),
    minLength(1, 'La dirección no debe estar vacía'),
  ]),
  postal: string('El código postal debe ser de tipo string', [
    minLength(1, 'El código postal no debe estar vacío'),
  ]),
  city: string('La población debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'La población no debe estar vacía'),
  ]),
  country: string('El país debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona un país'),
  ]),
  region: string('La región debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona una región'),
  ]),
  propertyHideAddress: optional(
    boolean('Ocultar la dirección debe ser de tipo boolean'),
  ),
  rentSell: string('El aquiler o venta debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona un tipo de anuncio (Alquiler o Venta)'),
  ]),
  sellPrice: number('El precio de la venta debe ser de tipo number', [
    minValue(1, 'El precio de la venta no debe estar vacío'),
    maxValue(2_000_000_000, 'El precio de la venta es demasiado grande'),
  ]),
  sellPriceArv: number(
    'El precio de la revalorización debe ser de tipo number',
    [minValue(0, 'El precio de la revalorización no debe estar vacío')],
  ),
  jointVenture: optional(boolean('El Joint Venture debe ser de tipo boolean')),
  optionalFinance: optional(boolean('Pago a plazos debe ser de tipo boolean')),
  financeInitPayment: optional(
    number('El pago inicial debe ser de tipo number', [
      minValue(1, 'El pago inicial no debe estar vacío'),
    ]),
  ),
  financeYears: optional(
    number('El número de años debe ser tipo number', [
      minValue(1, 'El número de años no debe estar vacío'),
    ]),
  ),
  financeInterest: optional(
    number('El interés debe ser de tipo number', [
      minValue(1, 'El interés no debe estar vacío'),
    ]),
  ),
  monthPayment: optional(
    number('La cuota mensual debe se de tipo number', [
      minValue(1, 'La cuota mensual no debe estar vacío'),
    ]),
  ),
  propertyType: string('El tipo de propiedad debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona el tipo de propiedad'),
  ]),
  propertySizeTerrain: number('El tamaño del terreno debe ser de tipo number', [
    minValue(1, 'El tamaño del terreno no debe estar vacío'),
  ]),
  visible: optional(boolean('Visible debe ser de tipo boolean')),
  userId: string('El ID del usuario debe ser de tipo uuid', [
    uuid('El ID del usuario debe ser de tipo UUID'),
  ]),
});

export const propertyRentHouseBuildingSchema = object({
  id: optional(
    string('El ID del inmueble debe ser de tipo uuid', [
      uuid('El ID del inmueble debe ser de tipo UUID'),
    ]),
  ),
  title: string('El título debe ser de tipo string', [
    toTrimmed(),
    minLength(1, 'El título no debe estar vacío'),
    maxLength(255, 'El título es demasiado grande'),
  ]),
  description: optional(
    string('La descripción debe ser de tipo string', [
      toTrimmed(),
      maxLength(255, 'La descripción es demasiado grande'),
    ]),
  ),
  conditionsSpecials: string(
    'Las condiciones especiales debe ser de tipo string',
    [
      toTrimmed(),
      toLowerCase(),
      minLength(1, 'Selecciona una de las condiciones especiales'),
    ],
  ),
  address: string('La dirección debe ser de tipo string', [
    toTrimmed(),
    minLength(1, 'La dirección no debe estar vacía'),
  ]),
  postal: string('El código postal debe ser de tipo string', [
    minLength(1, 'El código postal no debe estar vacío'),
  ]),
  city: string('La población debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'La población no debe estar vacía'),
  ]),
  country: string('El país debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona un país'),
  ]),
  region: string('La región debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona una región'),
  ]),
  propertyHideAddress: optional(
    boolean('Ocultar la dirección debe ser de tipo boolean'),
  ),
  rentSell: string('El aquiler o venta debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona un tipo de anuncio (Alquiler o Venta)'),
  ]),
  rentPrice: number('El precio del alquiler debe ser de tipo number', [
    minValue(1, 'El precio del alquiler no debe estar vacío'),
    maxValue(2_000_000_000, 'El precio del alquiler es demasiado grande'),
  ]),
  optionalBuy: optional(boolean('La compra opcional debe ser de tipo boolean')),
  rerent: optional(boolean('El realquiler debe ser de tipo boolean')),
  propertyType: string('El tipo de propiedad debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona el tipo de propiedad'),
  ]),
  propertyCondition: string('Estado del inmueble debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona un estado del inmueble'),
  ]),
  propertySize: number('El tamaño del inmueble debe ser de tipo number', [
    minValue(1, 'El tamaño del inmueble no debe estar vacío'),
  ]),
  energyCertificate: string(
    'El certificado energético debe ser de tipo string',
    [
      toTrimmed(),
      toLowerCase(),
      minLength(1, 'Selecciona un certificado energético'),
    ],
  ),
  furnished: string('Muebles debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona si el inmueble está amueblado'),
  ]),
  parking: string('El aparcamiento debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona el tipo de aparcamiento'),
  ]),
  pool: string('La piscina debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona un tipo de piscina'),
  ]),
  rooms: number('El número de habitaciones debe ser de tipo number', [
    minValue(0, 'El número de habitaciones no debe estar vacío'),
  ]),
  baths: number('El número de baños debe ser de tipo number', [
    minValue(0, 'El número de baños no debe estar vacío'),
  ]),
  visible: optional(boolean('Visible debe ser de tipo boolean')),
  userId: string('El ID del usuario debe ser de tipo uuid', [
    uuid('El ID del usuario debe ser de tipo UUID'),
  ]),
});

export const propertySellHouseBuildingSchema = object({
  id: optional(
    string('El ID del inmueble debe ser de tipo uuid', [
      uuid('El ID del inmueble debe ser de tipo UUID'),
    ]),
  ),
  title: string('El título debe ser de tipo string', [
    toTrimmed(),
    minLength(1, 'El título no debe estar vacío'),
    maxLength(255, 'El título es demasiado grande'),
  ]),
  description: optional(
    string('La descripción debe ser de tipo string', [
      toTrimmed(),
      maxLength(255, 'La descripción es demasiado grande'),
    ]),
  ),
  conditionsSpecials: string(
    'Las condiciones especiales debe ser de tipo string',
    [
      toTrimmed(),
      toLowerCase(),
      minLength(1, 'Selecciona una de las condiciones especiales'),
    ],
  ),
  address: string('La dirección debe ser de tipo string', [
    toTrimmed(),
    minLength(1, 'La dirección no debe estar vacía'),
  ]),
  postal: string('El código postal debe ser de tipo string', [
    minLength(1, 'El código postal no debe estar vacío'),
  ]),
  city: string('La población debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'La población no debe estar vacía'),
  ]),
  country: string('El país debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona un país'),
  ]),
  region: string('La región debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona una región'),
  ]),
  propertyHideAddress: optional(
    boolean('Ocultar la dirección debe ser de tipo boolean'),
  ),
  rentSell: string('El aquiler o venta debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona un tipo de anuncio (Alquiler o Venta)'),
  ]),
  sellPrice: number('El precio de la venta debe ser de tipo number', [
    minValue(1, 'El precio de la venta no debe estar vacío'),
    maxValue(2_000_000_000, 'El precio de la venta es demasiado grande'),
  ]),
  sellPriceArv: number(
    'El precio de la revalorización debe ser de tipo number',
    [minValue(0, 'El precio de la revalorización no debe estar vacío')],
  ),
  jointVenture: optional(boolean('El Joint Venture debe ser de tipo boolean')),
  optionalFinance: optional(boolean('Pago a plazos debe ser de tipo boolean')),
  financeInitPayment: optional(
    number('El pago inicial debe ser de tipo number', [
      minValue(1, 'El pago inicial no debe estar vacío'),
    ]),
  ),
  financeYears: optional(
    number('El número de años debe ser tipo number', [
      minValue(1, 'El número de años no debe estar vacío'),
    ]),
  ),
  financeInterest: optional(
    number('El interés debe ser de tipo number', [
      minValue(1, 'El interés no debe estar vacío'),
    ]),
  ),
  monthPayment: optional(
    number('La cuota mensual debe se de tipo number', [
      minValue(1, 'La cuota mensual no debe estar vacío'),
    ]),
  ),
  propertyType: string('El tipo de propiedad debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona el tipo de propiedad'),
  ]),
  propertyCondition: string('Estado del inmueble debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona un estado del inmueble'),
  ]),
  propertySize: number('El tamaño del inmueble debe ser de tipo number', [
    minValue(1, 'El tamaño del inmueble no debe estar vacío'),
  ]),
  energyCertificate: string(
    'El certificado energético debe ser de tipo string',
    [
      toTrimmed(),
      toLowerCase(),
      minLength(1, 'Selecciona un certificado energético'),
    ],
  ),
  furnished: string('Muebles debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona si el inmueble está amueblado'),
  ]),
  parking: string('El aparcamiento debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona el tipo de aparcamiento'),
  ]),
  pool: string('La piscina debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona un tipo de piscina'),
  ]),
  rooms: number('El número de habitaciones debe ser de tipo number', [
    minValue(0, 'El número de habitaciones no debe estar vacío'),
  ]),
  baths: number('El número de baños debe ser de tipo number', [
    minValue(0, 'El número de baños no debe estar vacío'),
  ]),
  visible: optional(boolean('Visible debe ser de tipo boolean')),
  userId: string('El ID del usuario debe ser de tipo uuid', [
    uuid('El ID del usuario debe ser de tipo UUID'),
  ]),
});

export const propertyRentSellApartmentSchema = object({
  id: optional(
    string('El ID del inmueble debe ser de tipo uuid', [
      uuid('El ID del inmueble debe ser de tipo UUID'),
    ]),
  ),
  title: string('El título debe ser de tipo string', [
    toTrimmed(),
    minLength(1, 'El título no debe estar vacío'),
    maxLength(255, 'El título es demasiado grande'),
  ]),
  description: optional(
    string('La descripción debe ser de tipo string', [
      toTrimmed(),
      maxLength(255, 'La descripción es demasiado grande'),
    ]),
  ),
  conditionsSpecials: string(
    'Las condiciones especiales debe ser de tipo string',
    [
      toTrimmed(),
      toLowerCase(),
      minLength(1, 'Selecciona una de las condiciones especiales'),
    ],
  ),
  address: string('La dirección debe ser de tipo string', [
    toTrimmed(),
    minLength(1, 'La dirección no debe estar vacía'),
  ]),
  postal: string('El código postal debe ser de tipo string', [
    minLength(1, 'El código postal no debe estar vacío'),
  ]),
  city: string('La población debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'La población no debe estar vacía'),
  ]),
  country: string('El país debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona un país'),
  ]),
  region: string('La región debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona una región'),
  ]),
  propertyHideAddress: optional(
    boolean('Ocultar la dirección debe ser de tipo boolean'),
  ),
  rentSell: string('El aquiler o venta debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona un tipo de anuncio (Alquiler o Venta)'),
  ]),
  rentPrice: number('El precio del alquiler debe ser de tipo number', [
    minValue(1, 'El precio del alquiler no debe estar vacío'),
    maxValue(2_000_000_000, 'El precio del alquiler es demasiado grande'),
  ]),
  optionalBuy: optional(boolean('La compra opcional debe ser de tipo boolean')),
  rerent: optional(boolean('El realquiler debe ser de tipo boolean')),
  sellPrice: number('El precio de la venta debe ser de tipo number', [
    minValue(1, 'El precio de la venta no debe estar vacío'),
    maxValue(2_000_000_000, 'El precio de la venta es demasiado grande'),
  ]),
  sellPriceArv: number(
    'El precio de la revalorización debe ser de tipo number',
    [minValue(0, 'El precio de la revalorización no debe estar vacío')],
  ),
  jointVenture: optional(boolean('El Joint Venture debe ser de tipo boolean')),
  optionalFinance: optional(boolean('Pago a plazos debe ser de tipo boolean')),
  financeInitPayment: optional(
    number('El pago inicial debe ser de tipo number', [
      minValue(1, 'El pago inicial no debe estar vacío'),
    ]),
  ),
  financeYears: optional(
    number('El número de años debe ser tipo number', [
      minValue(1, 'El número de años no debe estar vacío'),
    ]),
  ),
  financeInterest: optional(
    number('El interés debe ser de tipo number', [
      minValue(1, 'El interés no debe estar vacío'),
    ]),
  ),
  monthPayment: optional(
    number('La cuota mensual debe se de tipo number', [
      minValue(1, 'La cuota mensual no debe estar vacío'),
    ]),
  ),
  propertyType: string('El tipo de propiedad debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona el tipo de propiedad'),
  ]),
  propertyCondition: string('Estado del inmueble debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona un estado del inmueble'),
  ]),
  propertySize: number('El tamaño del inmueble debe ser de tipo number', [
    minValue(1, 'El tamaño del inmueble no debe estar vacío'),
  ]),
  energyCertificate: string(
    'El certificado energético debe ser de tipo string',
    [
      toTrimmed(),
      toLowerCase(),
      minLength(1, 'Selecciona un certificado energético'),
    ],
  ),
  elevator: string('El ascensor debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona si el inmueble tiene ascensor'),
  ]),
  furnished: string('Muebles debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona si el inmueble está amueblado'),
  ]),
  parking: string('El aparcamiento debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona el tipo de aparcamiento'),
  ]),
  pool: string('La piscina debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona un tipo de piscina'),
  ]),
  rooms: number('El número de habitaciones debe ser de tipo number', [
    minValue(0, 'El número de habitaciones no debe estar vacío'),
  ]),
  baths: number('El número de baños debe ser de tipo number', [
    minValue(0, 'El número de baños no debe estar vacío'),
  ]),
  visible: optional(boolean('Visible debe ser de tipo boolean')),
  userId: string('El ID del usuario debe ser de tipo uuid', [
    uuid('El ID del usuario debe ser de tipo UUID'),
  ]),
});

export const propertyRentSellChaletSchema = object({
  id: optional(
    string('El ID del inmueble debe ser de tipo uuid', [
      uuid('El ID del inmueble debe ser de tipo UUID'),
    ]),
  ),
  title: string('El título debe ser de tipo string', [
    toTrimmed(),
    minLength(1, 'El título no debe estar vacío'),
    maxLength(255, 'El título es demasiado grande'),
  ]),
  description: optional(
    string('La descripción debe ser de tipo string', [
      toTrimmed(),
      maxLength(255, 'La descripción es demasiado grande'),
    ]),
  ),
  conditionsSpecials: string(
    'Las condiciones especiales debe ser de tipo string',
    [
      toTrimmed(),
      toLowerCase(),
      minLength(1, 'Selecciona una de las condiciones especiales'),
    ],
  ),
  address: string('La dirección debe ser de tipo string', [
    toTrimmed(),
    minLength(1, 'La dirección no debe estar vacía'),
  ]),
  postal: string('El código postal debe ser de tipo string', [
    minLength(1, 'El código postal no debe estar vacío'),
  ]),
  city: string('La población debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'La población no debe estar vacía'),
  ]),
  country: string('El país debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona un país'),
  ]),
  region: string('La región debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona una región'),
  ]),
  propertyHideAddress: optional(
    boolean('Ocultar la dirección debe ser de tipo boolean'),
  ),
  rentSell: string('El aquiler o venta debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona un tipo de anuncio (Alquiler o Venta)'),
  ]),
  rentPrice: number('El precio del alquiler debe ser de tipo number', [
    minValue(1, 'El precio del alquiler no debe estar vacío'),
    maxValue(2_000_000_000, 'El precio del alquiler es demasiado grande'),
  ]),
  optionalBuy: optional(boolean('La compra opcional debe ser de tipo boolean')),
  rerent: optional(boolean('El realquiler debe ser de tipo boolean')),
  sellPrice: number('El precio de la venta debe ser de tipo number', [
    minValue(1, 'El precio de la venta no debe estar vacío'),
    maxValue(2_000_000_000, 'El precio de la venta es demasiado grande'),
  ]),
  sellPriceArv: number(
    'El precio de la revalorización debe ser de tipo number',
    [minValue(0, 'El precio de la revalorización no debe estar vacío')],
  ),
  jointVenture: optional(boolean('El Joint Venture debe ser de tipo boolean')),
  optionalFinance: optional(boolean('Pago a plazos debe ser de tipo boolean')),
  financeInitPayment: optional(
    number('El pago inicial debe ser de tipo number', [
      minValue(1, 'El pago inicial no debe estar vacío'),
    ]),
  ),
  financeYears: optional(
    number('El número de años debe ser tipo number', [
      minValue(1, 'El número de años no debe estar vacío'),
    ]),
  ),
  financeInterest: optional(
    number('El interés debe ser de tipo number', [
      minValue(1, 'El interés no debe estar vacío'),
    ]),
  ),
  monthPayment: optional(
    number('La cuota mensual debe se de tipo number', [
      minValue(1, 'La cuota mensual no debe estar vacío'),
    ]),
  ),
  propertyType: string('El tipo de propiedad debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona el tipo de propiedad'),
  ]),
  propertyCondition: string('Estado del inmueble debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona un estado del inmueble'),
  ]),
  propertySize: number('El tamaño del inmueble debe ser de tipo number', [
    minValue(1, 'El tamaño del inmueble no debe estar vacío'),
  ]),
  propertySizeTerrain: number('El tamaño del terreno debe ser de tipo number', [
    minValue(1, 'El tamaño del terreno no debe estar vacío'),
  ]),
  energyCertificate: string(
    'El certificado energético debe ser de tipo string',
    [
      toTrimmed(),
      toLowerCase(),
      minLength(1, 'Selecciona un certificado energético'),
    ],
  ),
  furnished: string('Muebles debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona si el inmueble está amueblado'),
  ]),
  parking: string('El aparcamiento debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona el tipo de aparcamiento'),
  ]),
  pool: string('La piscina debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona un tipo de piscina'),
  ]),
  rooms: number('El número de habitaciones debe ser de tipo number', [
    minValue(0, 'El número de habitaciones no debe estar vacío'),
  ]),
  baths: number('El número de baños debe ser de tipo number', [
    minValue(0, 'El número de baños no debe estar vacío'),
  ]),
  visible: optional(boolean('Visible debe ser de tipo boolean')),
  userId: string('El ID del usuario debe ser de tipo uuid', [
    uuid('El ID del usuario debe ser de tipo UUID'),
  ]),
});

export const propertyRentSellTerrainSchema = object({
  id: optional(
    string('El ID del inmueble debe ser de tipo uuid', [
      uuid('El ID del inmueble debe ser de tipo UUID'),
    ]),
  ),
  title: string('El título debe ser de tipo string', [
    toTrimmed(),
    minLength(1, 'El título no debe estar vacío'),
    maxLength(255, 'El título es demasiado grande'),
  ]),
  description: optional(
    string('La descripción debe ser de tipo string', [
      toTrimmed(),
      maxLength(255, 'La descripción es demasiado grande'),
    ]),
  ),
  conditionsSpecials: string(
    'Las condiciones especiales debe ser de tipo string',
    [
      toTrimmed(),
      toLowerCase(),
      minLength(1, 'Selecciona una de las condiciones especiales'),
    ],
  ),
  address: string('La dirección debe ser de tipo string', [
    toTrimmed(),
    minLength(1, 'La dirección no debe estar vacía'),
  ]),
  postal: string('El código postal debe ser de tipo string', [
    minLength(1, 'El código postal no debe estar vacío'),
  ]),
  city: string('La población debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'La población no debe estar vacía'),
  ]),
  country: string('El país debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona un país'),
  ]),
  region: string('La región debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona una región'),
  ]),
  propertyHideAddress: optional(
    boolean('Ocultar la dirección debe ser de tipo boolean'),
  ),
  rentSell: string('El aquiler o venta debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona un tipo de anuncio (Alquiler o Venta)'),
  ]),
  rentPrice: number('El precio del alquiler debe ser de tipo number', [
    minValue(1, 'El precio del alquiler no debe estar vacío'),
    maxValue(2_000_000_000, 'El precio del alquiler es demasiado grande'),
  ]),
  optionalBuy: optional(boolean('La compra opcional debe ser de tipo boolean')),
  rerent: optional(boolean('El realquiler debe ser de tipo boolean')),
  sellPrice: number('El precio de la venta debe ser de tipo number', [
    minValue(1, 'El precio de la venta no debe estar vacío'),
    maxValue(2_000_000_000, 'El precio de la venta es demasiado grande'),
  ]),
  sellPriceArv: number(
    'El precio de la revalorización debe ser de tipo number',
    [minValue(0, 'El precio de la revalorización no debe estar vacío')],
  ),
  jointVenture: optional(boolean('El Joint Venture debe ser de tipo boolean')),
  optionalFinance: optional(boolean('Pago a plazos debe ser de tipo boolean')),
  financeInitPayment: optional(
    number('El pago inicial debe ser de tipo number', [
      minValue(1, 'El pago inicial no debe estar vacío'),
    ]),
  ),
  financeYears: optional(
    number('El número de años debe ser tipo number', [
      minValue(1, 'El número de años no debe estar vacío'),
    ]),
  ),
  financeInterest: optional(
    number('El interés debe ser de tipo number', [
      minValue(1, 'El interés no debe estar vacío'),
    ]),
  ),
  monthPayment: optional(
    number('La cuota mensual debe se de tipo number', [
      minValue(1, 'La cuota mensual no debe estar vacío'),
    ]),
  ),
  propertyType: string('El tipo de propiedad debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona el tipo de propiedad'),
  ]),
  propertySizeTerrain: number('El tamaño del terreno debe ser de tipo number', [
    minValue(1, 'El tamaño del terreno no debe estar vacío'),
  ]),
  visible: optional(boolean('Visible debe ser de tipo boolean')),
  userId: string('El ID del usuario debe ser de tipo uuid', [
    uuid('El ID del usuario debe ser de tipo UUID'),
  ]),
});

export const propertyRentSellHouseBuildingSchema = object({
  id: optional(
    string('El ID del inmueble debe ser de tipo uuid', [
      uuid('El ID del inmueble debe ser de tipo UUID'),
    ]),
  ),
  title: string('El título debe ser de tipo string', [
    toTrimmed(),
    minLength(1, 'El título no debe estar vacío'),
    maxLength(255, 'El título es demasiado grande'),
  ]),
  description: optional(
    string('La descripción debe ser de tipo string', [
      toTrimmed(),
      maxLength(255, 'La descripción es demasiado grande'),
    ]),
  ),
  conditionsSpecials: string(
    'Las condiciones especiales debe ser de tipo string',
    [
      toTrimmed(),
      toLowerCase(),
      minLength(1, 'Selecciona una de las condiciones especiales'),
    ],
  ),
  address: string('La dirección debe ser de tipo string', [
    toTrimmed(),
    minLength(1, 'La dirección no debe estar vacía'),
  ]),
  postal: string('El código postal debe ser de tipo string', [
    minLength(1, 'El código postal no debe estar vacío'),
  ]),
  city: string('La población debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'La población no debe estar vacía'),
  ]),
  country: string('El país debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona un país'),
  ]),
  region: string('La región debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona una región'),
  ]),
  propertyHideAddress: optional(
    boolean('Ocultar la dirección debe ser de tipo boolean'),
  ),
  rentSell: string('El aquiler o venta debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona un tipo de anuncio (Alquiler o Venta)'),
  ]),
  rentPrice: number('El precio del alquiler debe ser de tipo number', [
    minValue(1, 'El precio del alquiler no debe estar vacío'),
    maxValue(2_000_000_000, 'El precio del alquiler es demasiado grande'),
  ]),
  optionalBuy: optional(boolean('La compra opcional debe ser de tipo boolean')),
  rerent: optional(boolean('El realquiler debe ser de tipo boolean')),
  sellPrice: number('El precio de la venta debe ser de tipo number', [
    minValue(1, 'El precio de la venta no debe estar vacío'),
    maxValue(2_000_000_000, 'El precio de la venta es demasiado grande'),
  ]),
  sellPriceArv: number(
    'El precio de la revalorización debe ser de tipo number',
    [minValue(0, 'El precio de la revalorización no debe estar vacío')],
  ),
  jointVenture: optional(boolean('El Joint Venture debe ser de tipo boolean')),
  optionalFinance: optional(boolean('Pago a plazos debe ser de tipo boolean')),
  financeInitPayment: optional(
    number('El pago inicial debe ser de tipo number', [
      minValue(1, 'El pago inicial no debe estar vacío'),
    ]),
  ),
  financeYears: optional(
    number('El número de años debe ser tipo number', [
      minValue(1, 'El número de años no debe estar vacío'),
    ]),
  ),
  financeInterest: optional(
    number('El interés debe ser de tipo number', [
      minValue(1, 'El interés no debe estar vacío'),
    ]),
  ),
  monthPayment: optional(
    number('La cuota mensual debe se de tipo number', [
      minValue(1, 'La cuota mensual no debe estar vacío'),
    ]),
  ),
  propertyType: string('El tipo de propiedad debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona el tipo de propiedad'),
  ]),
  propertyCondition: string('Estado del inmueble debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona un estado del inmueble'),
  ]),
  propertySize: number('El tamaño del inmueble debe ser de tipo number', [
    minValue(1, 'El tamaño del inmueble no debe estar vacío'),
  ]),
  energyCertificate: string(
    'El certificado energético debe ser de tipo string',
    [
      toTrimmed(),
      toLowerCase(),
      minLength(1, 'Selecciona un certificado energético'),
    ],
  ),
  furnished: string('Muebles debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona si el inmueble está amueblado'),
  ]),
  parking: string('El aparcamiento debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona el tipo de aparcamiento'),
  ]),
  pool: string('La piscina debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona un tipo de piscina'),
  ]),
  rooms: number('El número de habitaciones debe ser de tipo number', [
    minValue(0, 'El número de habitaciones no debe estar vacío'),
  ]),
  baths: number('El número de baños debe ser de tipo number', [
    minValue(0, 'El número de baños no debe estar vacío'),
  ]),
  visible: optional(boolean('Visible debe ser de tipo boolean')),
  userId: string('El ID del usuario debe ser de tipo uuid', [
    uuid('El ID del usuario debe ser de tipo UUID'),
  ]),
});

export const propertyUpdateSchema = object({
  id: optional(
    string('El ID del inmueble debe ser de tipo uuid', [
      uuid('El ID del inmueble debe ser de tipo UUID'),
    ]),
  ),
  title: string('El título debe ser de tipo string', [
    toTrimmed(),
    minLength(1, 'El título no debe estar vacío'),
    maxLength(255, 'El título es demasiado grande'),
  ]),
  description: string('La descripción debe ser de tipo string', [
    toTrimmed(),
    maxLength(255, 'La descripción es demasiado grande'),
  ]),
  conditionsSpecials: string(
    'Las condiciones especiales debe ser de tipo string',
    [
      toTrimmed(),
      toLowerCase(),
      minLength(1, 'Selecciona una de las condiciones especiales'),
    ],
  ),
  address: string('La dirección debe ser de tipo string', [
    toTrimmed(),
    minLength(1, 'La dirección no debe estar vacía'),
  ]),
  postal: string('El código postal debe ser de tipo string', [
    minLength(1, 'El código postal no debe estar vacío'),
  ]),
  city: string('La población debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'La población no debe estar vacía'),
  ]),
  country: string('El país debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona un país'),
  ]),
  region: string('La región debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona una región'),
  ]),
  propertyHideAddress: boolean('Ocultar la dirección debe ser de tipo boolean'),
  rentSell: string('El aquiler o venta debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona un tipo de anuncio (Alquiler o Venta)'),
  ]),
  rentPrice: number('El precio del alquiler debe ser de tipo number', [
    minValue(0, 'El precio del alquiler no debe estar vacío'),
    maxValue(2_000_000_000, 'El precio del alquiler es demasiado grande'),
  ]),
  sellPrice: number('El precio de la venta debe ser de tipo number', [
    minValue(0, 'El precio de la venta no debe estar vacío'),
    maxValue(2_000_000_000, 'El precio de la venta es demasiado grande'),
  ]),
  sellPriceArv: number(
    'El precio de la revalorización debe ser de tipo number',
    [minValue(0, 'El precio de la revalorización no debe estar vacío')],
  ),
  optionalBuy: boolean('La compra opcional debe ser de tipo boolean'),
  rerent: boolean('El realquiler debe ser de tipo boolean'),
  jointVenture: boolean('El Joint Venture debe ser de tipo boolean'),
  optionalFinance: optional(boolean('Pago a plazos debe ser de tipo boolean')),
  financeInitPayment: number('El pago inicial debe ser de tipo number', [
    minValue(0, 'El pago inicial no debe estar vacío'),
  ]),
  financeYears: number('El número de años debe ser tipo number', [
    minValue(0, 'El número de años no debe estar vacío'),
  ]),

  financeInterest: number('El interés debe ser de tipo number', [
    minValue(0, 'El interés no debe estar vacío'),
  ]),

  monthPayment: number('La cuota mensual debe se de tipo number', [
    minValue(0, 'La cuota mensual no debe estar vacío'),
  ]),

  propertyType: string('El tipo de propiedad debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(1, 'Selecciona el tipo de propiedad'),
  ]),
  propertyCondition: string('Estado del inmueble debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(0, 'Selecciona un estado del inmueble'),
  ]),
  propertySize: number('El tamaño del inmueble debe ser de tipo number', [
    minValue(0, 'El tamaño del inmueble no debe estar vacío'),
  ]),
  propertySizeTerrain: number('El tamaño del terreno debe ser de tipo number', [
    minValue(0, 'El tamaño del terreno no debe estar vacío'),
  ]),
  energyCertificate: string(
    'El certificado energético debe ser de tipo string',
    [
      toTrimmed(),
      toLowerCase(),
      minLength(0, 'Selecciona un certificado energético'),
    ],
  ),
  elevator: string('El ascensor debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(0, 'Selecciona si el inmueble tiene ascensor'),
  ]),
  furnished: string('Muebles debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(0, 'Selecciona si el inmueble está amueblado'),
  ]),
  parking: string('El aparcamiento debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(0, 'Selecciona el tipo de aparcamiento'),
  ]),
  pool: string('La piscina debe ser de tipo string', [
    toTrimmed(),
    toLowerCase(),
    minLength(0, 'Selecciona un tipo de piscina'),
  ]),
  rooms: number('El número de habitaciones debe ser de tipo number', [
    minValue(0, 'El número de habitaciones no debe estar vacío'),
  ]),
  baths: number('El número de baños debe ser de tipo number', [
    minValue(0, 'El número de baños no debe estar vacío'),
  ]),
  visible: boolean('Visible debe ser de tipo boolean'),
  userId: string('El ID del usuario debe ser de tipo uuid', [
    uuid('El ID del usuario debe ser de tipo UUID'),
  ]),
});
