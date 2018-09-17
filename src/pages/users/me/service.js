import request from '../../../utils/request';


export function login(data) {
  return request({
    url: 'http://localhost:9000/user/signup',
    method: 'post',
    data,
  })
}

export function authenticate(values) {
  const aaa = request('http://localhost:9000/user', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(values),
  });
  console.log(aaa)
  return aaa;
}