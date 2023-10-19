export const getBaseUrl = (): string => {
  return process.env.SERVER_URL || "https://backend-ordain.vercel.app/api/v1";
};
