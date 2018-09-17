import { authenticate } from './service';
import router from 'umi/router';


export default {
    namespace: 'signin',
  
    state: {},
  
    effects: {

    *authenticate({ payload: values }, { call, put, select }) {
        console.log('create in model being called', values)
        const { data } = yield call(authenticate, values);
        console.log('signin model authenticate', data)
        // const { locationQuery } = yield select(_ => _.app)
        // console.log('signin model authenticate', locationQuery)
        if (data.success) {
          yield put({ type: 'app/query', payload: data })
        }
        yield put(router.push('/beautyProfessionals'))
      },
    },
  
  }