import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerBasicUserTable = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BasicUserTable, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email?: string | null;
  readonly profile_pic?: string | null;
  readonly wallet_address?: string | null;
  readonly username?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBasicUserTable = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BasicUserTable, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email?: string | null;
  readonly profile_pic?: string | null;
  readonly wallet_address?: string | null;
  readonly username?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BasicUserTable = LazyLoading extends LazyLoadingDisabled ? EagerBasicUserTable : LazyBasicUserTable

export declare const BasicUserTable: (new (init: ModelInit<BasicUserTable>) => BasicUserTable) & {
  copyOf(source: BasicUserTable, mutator: (draft: MutableModel<BasicUserTable>) => MutableModel<BasicUserTable> | void): BasicUserTable;
}