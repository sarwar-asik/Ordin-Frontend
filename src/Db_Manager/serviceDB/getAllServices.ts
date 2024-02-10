import { authKey } from "@/constant/storageKey";
import { getFromLocalStorage } from "@/utils/local.storeage";

export const cartAllData = async()=>{
    const accessToken = getFromLocalStorage(authKey);
    console.log(accessToken,"aaaaaccess");
    //   const { data } = useCartsQuery(undefined);
    //   console.log("🚀 ~ file: page.tsx:6 ~ CartPage ~ data:", data)dev
  
    const res = await fetch(
      `https://backend-ordain-168ltp3bx-sarwar-asik.vercel.app/api/v1/service`,
      {
        headers: {
          "Content-Type": "application/json",
          authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhcndhcmFzaWt1c2VyQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWQiOiIwMTZmYTkzMC1iOThjLTQzNWItODE0NS01N2E4NDRjNGE2MjciLCJpYXQiOjE2OTc0Mjg5ODksImV4cCI6MTY5Nzg2MDk4OX0.1gMDJbFBeklEuNbB6vNSX0LLVAloi97nAvNK91zZKtU" as string,
        },
      }
    );
    const data = await res.json()
    console.log(data);

    return data
}
