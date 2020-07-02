import { types } from 'mobx-state-tree';

import { ChurrasStoreModel } from '../churras';

/**
 * The RootStore model.
 */
export const RootStoreModel = types.model('RootStore').props({
  churrasStore: types.optional(ChurrasStoreModel, {}),
});

/**
 * The RootStore instance.
 */
export type RootStore = typeof RootStoreModel.Type;

/**
 * The data of the RootStore.
 */
export type RootStoreSnapshot = typeof RootStoreModel.SnapshotType;
