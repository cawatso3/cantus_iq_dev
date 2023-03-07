// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { DefaultUserTable } = initSchema(schema);

export {
  DefaultUserTable
};