import React from "react";
import ContentLoader from "react-content-loader";

const LoaderCategory = () => {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 gap-2">
      {[1, 2, 3, 4].map((item: any) => (
        <div className="" key={item}>
            <ContentLoader
                speed={2}
                width={300}
                height={300}
                viewBox="0 0 310 376"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
              >
                <rect x="0" y="0" rx="0" ry="0" width="310" height="230" />
                <rect x="10" y="250" rx="0" ry="0" width="100" height="20" />
              
              </ContentLoader>
        </div>
      ))}
    </section>
  );
};

export default LoaderCategory;
