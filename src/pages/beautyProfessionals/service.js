import request from '../../utils/request';
import { BEAUTY_PROFESSIONAL_URL } from '../../utils/constants';


export function fetch() {
  return request(BEAUTY_PROFESSIONAL_URL);
}

export function fetchOne(bpId) {
  return request(BEAUTY_PROFESSIONAL_URL+ '/' + bpId);
}