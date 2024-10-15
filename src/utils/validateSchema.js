import { safeParse } from 'valibot';

export default function validateSchema(schema, input) {
  return safeParse(schema, input);
}
