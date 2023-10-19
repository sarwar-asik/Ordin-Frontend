export const getBaseUrl = (): string => {
  return process.env.SERVER_URL || 
  // "https://backend-ordain.vercel.app/api/v1";
  "http://localhost:5000/api/v1"

};
