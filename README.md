# Ordain Frontend

```tsx
{
    name: "Ordain",
    category: "Interior Design Service",

    developer: "Sarwar Hossain",
    technology: [ "NextJs App router", "Redux", "Axios instance",
                "TypeScript", "Ant Design", "Tailwind", "CSS",
                "Cookie", "local_storage" ],

    live_server: "https://ordain-interior.vercel.app/",
    data_source: "Rest API",
    server_url:  "https://backend-ordain.vercel.app/",
    server_repo: "https://github.com/sarwar-asik/Ordin-Server",

    createdAt: "25 October 2023",
    updatedAt: "30 October 2023"
}
```

## Used Technology :::

- Next Js App Router
- TypeScript
- Redux ,RTK
- Ant Design
- CSS
- Tailwind
- JWT
- Axios
- Axios instance for Redux

## Interior Project Requirements :::

### Introduction

The Interior Service Website project is a sophisticated online platform that bridges the gap between interior service providers and customers, offering a wide range of features and functionalities to meet the needs of both parties. The following document presents a comprehensive list of functional and non-functional requirements that constitute the backbone of this website.

### Functional Requirements

1. **User Authentication and Authorization**

   - Users can register (Sign Up) with their details.
   - Users can log in (Login) to access the platform.
   - User roles include User, Admin, and Super Admin.
   - JSON Web Tokens (JWT) are used to ensure secure user authentication and authorization.

2. **User Dashboard**

   - Each user is provided with a personalized dashboard tailored to their role of user, admin, super_admin .
   - User-specific actions are protected based on their role to ensure data security.

3. **Categories Management**

   - Admin and Super Admin roles can create, read, update, and delete interior service categories.
   - All users can access the list of categories.

4. **Services Listings**

   - Admin and Super Admin roles can create, read, update, and delete service listings.
   - All users can view the list of available services.

5. **Booking Services**

   - Users can book services they are interested in.
   - Admin and Super Admin can access the complete list of bookings, while users can only view their bookings.

6. **Shopping Cart**

   - Users have the capability to add services to their shopping carts.
   - Users can access and manage the contents of their shopping carts.

7. **User Reviews**

   - Users can leave reviews for services they have used.
   - Admin and Super Admin can view all reviews, while users can only access their own reviews.

8. **FAQ Management**

   - Admin and Super Admin can create, read, update, and delete frequently asked questions (FAQs).
   - All users can view the list of FAQs, which aids in providing transparency and information.

9. **Payment Integration**

   - Users can make secure payments for services using SSL payment gateway integration, ensuring data security.

10. **Content Management**

    - Admin and Super Admin can create and manage blog posts to provide valuable information to users.
    - All users can view the blog posts, enhancing their understanding of services.

11. **Information Pages**
    - The website offers a range of static pages, including Home, Service, About, Gallery, Blogs, and Contact Us, enhancing the user experience.

### Non-Functional Requirements

1. **Security**

   - Robust security measures are in place for user authentication and authorization, safeguarding user data and access rights.
   - SSL payment gateway integration is configured to ensure secure transactions.

2. **Performance**

   - The website must be responsive, with fast loading times and minimal downtime.
   - Database queries and data retrieval processes are optimized for optimal performance.

3. **Scalability**

   - The architecture of the website should support scalability to handle an expanding user base and service listings.

4. **Usability**

   - The website must provide an intuitive and user-friendly interface with clear navigation.
   - Content should be well-organized, easy to understand, and contribute to a positive user experience.

5. **Mobile Responsiveness**

   - Full mobile responsiveness is a priority to ensure that users on all devices have an optimal experience.

6. **Code Quality**

   - The codebase must adhere to best practices and be well-documented, ensuring high code quality standards.

7. **Maintenance**

   - The website should be designed for easy maintenance and updates to keep it up-to-date and user-friendly.

8. **Data Backup and Recovery**

   - Regular data backups should be conducted to enable data recovery in the event of unexpected incidents.

9. **Compliance**
   - The website must comply with data protection and privacy regulations to protect user data.

### Conclusion

The Interior Service Website project is aimed at providing a seamless experience for both users and service providers in the interior design industry. These requirements ensure that the project functions effectively, maintains a high level of security, and delivers a user-friendly experience.
