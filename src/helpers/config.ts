export const getBaseUrl =():string=>{
    return process.env.SERVER_URL ||"http://localhost:5000/api/v1"
}