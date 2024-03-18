import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerChallengesInfo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChallengesInfo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ProjectName?: string | null;
  readonly ShortInfo?: string | null;
  readonly Category?: string | null;
  readonly Customer?: string | null;
  readonly AWSServices?: string | null;
  readonly ProjectPic?: string | null;
  readonly ProjectInfoURL?: string | null;
  readonly Highlight?: boolean | null;
  readonly Demo?: string | null;
  readonly github?: string | null;
  readonly approach?: string | null;
  readonly ProjectName_es?: string | null;
  readonly Category_es?: string | null;
  readonly approach_es?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyChallengesInfo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChallengesInfo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ProjectName?: string | null;
  readonly ShortInfo?: string | null;
  readonly Category?: string | null;
  readonly Customer?: string | null;
  readonly AWSServices?: string | null;
  readonly ProjectPic?: string | null;
  readonly ProjectInfoURL?: string | null;
  readonly Highlight?: boolean | null;
  readonly Demo?: string | null;
  readonly github?: string | null;
  readonly approach?: string | null;
  readonly ProjectName_es?: string | null;
  readonly Category_es?: string | null;
  readonly approach_es?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ChallengesInfo = LazyLoading extends LazyLoadingDisabled ? EagerChallengesInfo : LazyChallengesInfo

export declare const ChallengesInfo: (new (init: ModelInit<ChallengesInfo>) => ChallengesInfo) & {
  copyOf(source: ChallengesInfo, mutator: (draft: MutableModel<ChallengesInfo>) => MutableModel<ChallengesInfo> | void): ChallengesInfo;
}