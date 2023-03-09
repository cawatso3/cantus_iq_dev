// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { BasicUserTable } = initSchema(schema);

export {
  BasicUserTable
};