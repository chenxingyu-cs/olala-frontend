
export default {

  namespace: 'app',

  state: {
    userId: ''
  },

  subscriptions: {
    setup({ dispatch, history }) {
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      yield put({ type: 'save' });
    },

    *query({ payload }, { call, put }) {
      console.log('app query', payload)
      yield put({ type: 'save', payload });
    },
  },

  reducers: {
    save(state, { payload }) {
      console.log('app save', payload)
      const { userId } = payload;
      return { ...state, userId };
    },
  },

};
