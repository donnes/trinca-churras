import { types } from 'mobx-state-tree';

export const UserModel = types
  .model()
  .props({
    id: types.identifier,
    name: types.maybeNull(types.string),
    has_paid: types.optional(types.boolean, false),
    price: types.maybeNull(types.number),
  });

export type User = typeof UserModel.Type;
export type UserSnapshot = typeof UserModel.SnapshotType;
