const axios = require('axios').default;

export const buildSummary = async (payload) => {
//   const payload = [
//     {
//         "sectionName": "Section 1",
//         "content": "Text messaging, or texting, is the act of composing and sending electronic messages."
//     },
//     {
//         "sectionName": "Section 2",
//         "content": "Text messaging, or texting."
//     },
//     {
//         "sectionName": "Section 2",
//         "content": "Text messaging, or texting, is the act of composing and sending electronic messages."
//     }
// ];
  const result = await axios.post('http://localhost:3000/api/summary', payload);
  return result;
}

export const saveSummary = async (payload) => {
  const result = await axios.post('http://localhost:3000/api/userData', payload);
  return result;
}

export const deleteSummary = async (summaryId) => {
  const result = await axios.delete(`http://localhost:3000/api/userData/${summaryId}`);
  return result;
}

export const getSummary = async (userId) => {
  const result = await axios.get(`http://localhost:3000/api/userData/${userId}`);
  return result;
} 