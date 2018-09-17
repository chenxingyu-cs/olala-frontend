import { create } from './service'

export default {
    namespace: 'signup',
  
    state: {},
  
    effects: {

    *create({ payload: values }, { call, put, select }) {
        console.log('create in model being called', values)
        const res = yield call(create, values);
        console.log('res', res)
        // const page = yield select(state => state.users.page);
        // yield put({ type: 'fetch', payload: { page } });
      },
    },
  
  }