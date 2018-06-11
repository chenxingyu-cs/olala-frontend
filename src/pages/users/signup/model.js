import * as signupService from './service'

export default {
    namespace: 'signup',
  
    state: {},
  
    effects: {

    *create({ payload: values }, { call, put, select }) {
        console.log('create in model being called', values)
        yield call(signupService.create, values);
        // const page = yield select(state => state.users.page);
        // yield put({ type: 'fetch', payload: { page } });
      },
    },
  
  }