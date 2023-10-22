import React from 'react';
// import loaderImg from "@/assets/dataLoader.gif"
import loaderImg from "@/assets/dataLoaderTransfarent.gif"
import Image from 'next/image';

const LoadingData = () => {
    return (
        <div style={{
            height:"30vh",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
           
            // marginBlock:"3rem"
        }}>
            <Image height={100} width={100} style={{
                marginInline:"auto",
                borderRadius:"70%",
          
                // width:"50%"
            }} src={loaderImg} alt='loader'/>
        </div>
    );
};

export default LoadingData;