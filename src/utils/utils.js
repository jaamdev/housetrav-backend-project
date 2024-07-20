import { hash, compare } from 'bcrypt';
import { SignJWT, jwtVerify } from 'jose';

export const initialState = {
  visible: false,
  title: '',
  description: '',
  conditionsSpecials: '',
  address: '',
  postal: '',
  city: '',
  country: '',
  region: '',
  propertyHideAddress: false,
  rentSell: '',
  rentPrice: 0,
  sellPrice: 0,
  sellPriceArv: 0,
  optionalBuy: false,
  rerent: false,
  jointVenture: false,
  optionalFinance: false,
  financeInitPayment: 0,
  financeYears: 0,
  financeInterest: 0,
  monthPayment: 0,
  propertyType: '',
  propertyCondition: '',
  propertySize: 0,
  propertySizeTerrain: 0,
  energyCertificate: '',
  elevator: '',
  furnished: '',
  parking: '',
  pool: '',
  rooms: 0,
  baths: 0,
};

export function sendObject(input) {
  const ok = !input.error;
  const data = input.data ? input.data : [];
  const error = input.error ? input.error : [];
  const message = input.message ? input.message : [];
  const status = input.status ? input.status : 0;
  const result = { ok, data, error, message, status };
  return result;
}

export async function hashPassword(password) {
  const result = await hash(password, 12);
  return result;
}

export async function hashCompare(passwordOne, passwordTwo) {
  const result = await compare(passwordOne, passwordTwo);
  return result;
}

export async function createToken(id) {
  const jwtConstructor = new SignJWT({ id });
  const encoder = new TextEncoder();
  const jwt = await jwtConstructor
    .setProtectedHeader({
      alg: 'HS256',
      typ: 'JWT',
    })
    .setIssuedAt()
    .setExpirationTime('3h')
    .sign(encoder.encode(process.env.JWT_KEY));
  return jwt;
}

export async function verifyToken(token) {
  try {
    const encoder = new TextEncoder();
    const { payload } = await jwtVerify(
      token,
      encoder.encode(process.env.JWT_KEY),
    );
    return payload.id;
  } catch (error) {
    return false;
  }
}

export async function createQuery({ input }) {
  const lettersUpperCase = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'Ñ',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  const queryNames = [];
  const queryValues = [];
  const queryInputs = [];

  for (const [key, value] of Object.entries(input)) {
    if (value !== undefined || value !== null) {
      const word = [];

      key === 'userId'
        ? queryValues.push('UUID_TO_BIN(?)')
        : queryValues.push('?');

      for (const letter of key) {
        const letterFound = lettersUpperCase.filter((p) => p.includes(letter));

        if (letterFound.length !== 0) {
          word.push('_', letter.toLowerCase());
        } else {
          word.push(letter);
        }
      }

      queryNames.push(word.join(''));
      queryInputs.push(value);
    }
  }

  return new Promise((resolve) => {
    resolve({
      queryInputs,
      querySQL: `INSERT INTO properties (${queryNames}) VALUES (${queryValues});`,
    });
  });
}

export async function updateQuery({ input }) {
  const lettersUpperCase = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'Ñ',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  const queryNames = [];
  const queryWhere = [];
  const queryWhereInputs = [];
  const queryInputs = [];

  for (const [key, value] of Object.entries(input)) {
    if (value !== undefined || value !== null) {
      const word = [];

      for (const letter of key) {
        const letterFound = lettersUpperCase.filter((p) => p.includes(letter));

        if (letterFound.length !== 0) {
          word.push('_', letter.toLowerCase());
        } else {
          word.push(letter);
        }
      }

      const wordResult = word.join('');

      if (wordResult === 'id' || wordResult === 'user_id') {
        queryWhere.push(wordResult + ' = UUID_TO_BIN(?)');
        queryWhereInputs.push(value);
      } else {
        queryNames.push(wordResult + ' = ?');
        queryInputs.push(value);
      }
    }
  }

  queryInputs.push(...queryWhereInputs);

  return new Promise((resolve) => {
    resolve({
      queryInputs,
      querySQL: `UPDATE properties SET ${queryNames} WHERE ${queryWhere.join(' AND ')};`,
    });
  });
}
