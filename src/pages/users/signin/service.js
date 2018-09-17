import request from '../../../utils/request';
import { USER_URL } from '../../../utils/constants';


export function login(data) {
  return request({
    url: 'http://localhost:9000/user/signup',
    method: 'post',
    data,
  })
}

export function authenticate(values) {
  const aaa = request(`${USER_URL}/login`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(values),
  });
  console.log(aaa)
  return aaa;
}