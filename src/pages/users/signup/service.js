import request from '../../../utils/request';
import { USER_URL } from '../../../utils/constants';

// export function login(data) {
//   return request({
//     url: 'http://localhost:9000/user/signup',
//     method: 'post',
//     data,
//   })
// }

export function create(values) {
  console.log('test', USER_URL)
  const aaa = request(`${USER_URL}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(values),
    // credentials: 'include',
    // mode: 'cors'
  });
  // const aaa = request('http://localhost:7001/api/v1/users/5b9eb8b16df3b00f8be8700d')
  console.log(aaa)
  return aaa;
}