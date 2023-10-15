"use client";
import { getUserInfo } from '@/utils/local.storeage';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const Profile = () => {
    const router = useRouter()
    const user = getUserInfo() as any
    console.log(user);

    useEffect(()=>{
   if(!user?.role){
    router.push('/')
   }
    },[user,router])
    
    return (
        <div>
            <h1>{user?.role} Profile of {user?.email}</h1>
        </div>
    );
};

export default Profile;