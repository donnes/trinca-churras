import { types } from 'mobx-state-tree';
import { ChurrasModel } from './churras';
import { withEnvironment } from '../extensions';

export const ChurrasStoreModel = types
  .model()
  .props({
    data: types.optional(types.array(ChurrasModel), []),
    fetching: types.optional(types.boolean, false),
    submitting: types.optional(types.boolean, false),
    error: types.optional(types.boolean, false),
  })
  .extend(withEnvironment);

type ChurrasStoreType = typeof ChurrasStoreModel.Type;
export type ChurrasStore = ChurrasStoreType;
