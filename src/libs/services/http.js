import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_API_URL;

const parseResponse = (response) => {
  return {
    isError: response.status !== 200,
    data: response.data
  }
}

export const http = (method, url = '', data) => new Promise((resolve) => {
  axios({
    method,
    url: `https://fakestoreapi.com/${url}`,
    data,
  })
    .then((response) => {
      resolve(parseResponse(response));
    })
    .catch((e) => {
      resolve({
        isError:true
      })
    });
});
