
import { authKey } from "@/constant/storageKey";
import { getFromLocalStorage } from "@/utils/local.storeage";

export const cartAllData = async({accessToken}:{accessToken:string})=>{
 
    //   const { data } = useCartsQuery(undefined);
    //   console.log("🚀 ~ file: page.tsx:6 ~ CartPage ~ data:", data)dev
  
    const res = await fetch(`http://localhost:5000/api/v1/cart`,{
      headers: {
        "Content-Type": "application/json",
        "authorization":accessToken as string,
    },
    });
    const data = await res.json()
    console.log(data);

    return data
}
