const API_URL = "http://localhost:5000/api/schemes";

export const getSchemes = async () => {
  const res = await fetch(API_URL);
  return res.json(); // returns array of schemes
};
