import * as signinService from './service'

export default {
    namespace: 'me',
  
    state: {},
  
    effects: {

    *authenticate({ payload: values }, { call, put, select }) {
        console.log('create in model being called', values)
        yield call(signinService.authenticate, values);
      },
    },
  
  }