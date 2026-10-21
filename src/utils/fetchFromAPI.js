import axios from 'axios';

const BASE_URL = 'https://youtube-v311.p.rapidapi.com';

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '2a009e0215mshe0220b870eef7d9p161bebjsn13ed22f6',
    'X-RapidAPI-Host': 'youtube-v311.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};