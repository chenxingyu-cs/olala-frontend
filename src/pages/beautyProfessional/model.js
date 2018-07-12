import * as beautyProfessionalService from './service'

export default {
    namespace: 'beautyProfessionals',
  
    state: {
      list: [],
    },

    reducers: {
      save(state, { payload: { data: list } }) {
        return { ...state, list };
      },
    },
  
    effects: {

      // Fetch the beautyProfessional
      *fetch({ payload: { page = 1 } }, { call, put }) {
        const { data, err } = yield call(beautyProfessionalService.fetch);
        console.log('data', data)
        console.log('err', err)
        yield put({
          type: 'save',
          payload: {
            data,
          },
        });
      },

    },
  
  }