import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerDefaultUserTable = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DefaultUserTable, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly profile_img?: string | null;
  readonly username?: string | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDefaultUserTable = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DefaultUserTable, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly profile_img?: string | null;
  readonly username?: string | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DefaultUserTable = LazyLoading extends LazyLoadingDisabled ? EagerDefaultUserTable : LazyDefaultUserTable

export declare const DefaultUserTable: (new (init: ModelInit<DefaultUserTable>) => DefaultUserTable) & {
  copyOf(source: DefaultUserTable, mutator: (draft: MutableModel<DefaultUserTable>) => MutableModel<DefaultUserTable> | void): DefaultUserTable;
}