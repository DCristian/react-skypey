import { createStore, Store } from 'redux';
import { StateType } from 'typesafe-actions';

import reducer from '../reducers/index';

export type RootState = StateType<typeof reducer>;

const store: Store = createStore(reducer);

export default store;