import axios from 'axios';

// const checkToken:any = ''

export default axios.create({
  baseURL: 'http://localhost:7300',
  // headers: {
  //   Authorization: `${checkToken}`,
  // },
});
