import axios from 'axios';

const API_BASE_URL = 'http://geodb-cities-api.wirefreethought.com';

export const getDestinations = async () => {
  const response = await axios.get(`${API_BASE_URL}/destinations`);
  return response.data;
};

export const addDestination = async (destination) => {
  const response = await axios.post(`${API_BASE_URL}/destinations`, destination);
  return response.data;
};
