import axios from 'axios';

const BASE_URL = 'https://www.googleapis.com/customsearch/v1';

const params = {
  key: 'AIzaSyC2_PkJx1iQ3lsQ-5bJARE5A9TK1s2lFBM',
  cx: '837f58b1afb1c497f',
};

export const fetchApi = async (payload) => {
  const { data } = await axios.get(BASE_URL, {
    params: { ...params, ...payload },
  });
  return data;
};
