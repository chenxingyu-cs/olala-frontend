import * as beautyProfessionalService from './service'

export default {
    namespace: 'beautyProfessionals',
  
    state: {
      list: [],
      current: {
        _id: 123,
        services: [], 
        photos: [], 
        name: '', 
        address: {}, 
        pricing: [], 
        reviewsOverall: {}, 
        reviews: [{reviewerName: '', _id: 0}],
        availability: [{}]
      }
    },

    reducers: {
      save(state, { payload: { data: list } }) {
        return { ...state, list };
      },

      saveOne(state, { payload: { data: current } }) {
        return { ...state, current };
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

      // Fetch the beautyProfessional
      *fetchCurrent({ payload: { bpId = 1 } }, { call, put }) {
        const { data, err } = yield call(beautyProfessionalService.fetchOne, bpId);
        yield put({
          type: 'saveOne',
          payload: {
            data,
          },
        });
      },

    },
  
  }