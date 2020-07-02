import { types } from 'mobx-state-tree';

import { UserModel } from '../user';

export const ChurrasModel = types
  .model()
  .props({
    id: types.identifier,
    title: types.maybeNull(types.string),
    description: types.maybeNull(types.string),
    users: types.optional(types.array(UserModel), []),
    created_at: types.maybeNull(types.string),
  });

export type Churras = typeof ChurrasModel.Type;
export type ChurrasSnapshot = typeof ChurrasModel.SnapshotType;
