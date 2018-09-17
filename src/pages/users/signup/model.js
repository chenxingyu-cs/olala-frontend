import { create } from './service';
import router from 'umi/router';


export default {
    namespace: 'signup',
  
    state: {},
  
    effects: {

    *create({ payload: values }, { call, put, select }) {
        console.log('create in model being called', values)
        const { data } = yield call(create, values);
        if (data.success) {
          router.push('/users/signin');
        }
      },
    },
  
  }