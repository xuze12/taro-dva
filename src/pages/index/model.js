// import * as homeApi from './service';

export default {
  namespace: 'index',
  state: {
    page: 1,
  },
  effects: {

  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
