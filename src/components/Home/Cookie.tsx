"use client";

import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import Cookies from 'js-cookie';
import dynamic from "next/dynamic";

const CookieComponent = () => {
    const [visible, setVisible] = useState(!Cookies.get('cookieConsent'));

    const handleAccept = () => {
        Cookies.set('cookieConsent', 'accepted', { expires: 30 });
        setVisible(false);
    };

    const handleDecline = () => {
        Cookies.set('cookieConsent', 'declined', { expires: 30 });
        setVisible(false);
    };
    if (visible) {
        return (
            <div
                className="fixed inset-x-0 bottom-0 z-50 flex flex-col items-center justify-center bg-black text-white p-4 sm:p-6 lg:p-8">
                <p className="text-lg md:text-xl text-center mb-4">
                    We use cookies and other tracking technologies to improve your browsing experience on our website, to show you
                    personalized content and targeted ads, to analyze our website traffic, and to understand where our visitors are
                    coming from.
                </p>
                <div className="flex flex-col md:flex-row gap-2">
                    <button onClick={handleDecline} className="bg-white w-full min-w-[200px] hover:bg-teal-700 hover:text-white px-4 py-2 text-sm md:text-base font-semibold rounded-lg mb-2 md:mb-0 cursor-pointer">
                        I Agree
                    </button>
                    <button onClick={handleAccept} className="bg-red-500 w-full min-w-[200px] text-white hover:bg-gray-700 px-4 py-2 text-sm md:text-base font-semibold rounded-lg cursor-pointer">
                        I Decline
                    </button>
                </div>
                {/* <button className="mt-2 text-sm text-white underline">Change my preferences</button> */}
            </div>
        )
    }
    return null
}


export default dynamic(() => Promise.resolve(CookieComponent), {
    ssr: false,
});
