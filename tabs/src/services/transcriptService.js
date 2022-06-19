const axios = require('axios').default;

export const uploadTranscript = async (payload) => {
  const result = await axios.post('http://localhost:3000/api/transcript', payload);
  console.log(result);
  return result;
}