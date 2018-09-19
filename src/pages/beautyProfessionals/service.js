import request from '../../utils/request';
import { BEAUTY_PROFESSIONAL_URL, REVIEW_URL } from '../../utils/constants';


export function fetch() {
  return request(BEAUTY_PROFESSIONAL_URL);
}

export function fetchOne(bpId) {
  return request(BEAUTY_PROFESSIONAL_URL+ '/' + bpId);
}

// export function createRview(values) {
//   const aaa = request(`${BEAUTY_PROFESSIONAL_URL}/login`, {
//     method: 'POST',
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(values),
//   });
//   console.log(aaa)
//   return aaa;
// }


export function createReview(values) {
  const aaa = request(REVIEW_URL, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(values),
  });
  console.log(aaa)
  return aaa;
}