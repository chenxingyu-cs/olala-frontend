const HOST_URL = 'http://localhost:7001/api/v1';

const PROD_HOST_URL = 'http://ec2-52-40-84-40.us-west-2.compute.amazonaws.com:7001/api/v1'
// const PROD_HOST_URL = HOST_URL


const HOME_HEAD_IMG = 'https://res.cloudinary.com/xnchen/image/upload/v1530726459/olala/sf.jpg';

const BEAUTY_PROFESSIONAL_URL = `${HOST_URL}/beautyProfessionals`;
const USER_URL = `${HOST_URL}/users`;
const REVIEW_URL = `${HOST_URL}/customerReviews`;

// http://localhost:7001/api/v1/customerReviews

const GOOGLE_MAP_API_KEY = 'AIzaSyCdvR7wOaHN_MP7KExd-JZDiwKjDNOKD5c';

module.exports = {
  BEAUTY_PROFESSIONAL_URL,
  GOOGLE_MAP_API_KEY,
  HOST_URL,
  HOME_HEAD_IMG,
  USER_URL,
  REVIEW_URL,
}

