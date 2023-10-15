import Link from 'next/link';
import React from 'react';

const ServicePage = () => {
    return (
        <div>
            <Link href='/admin/service/create'>Create a Service</Link>
            
            <h2>All Services</h2>
        </div>
    );
};

export default ServicePage;