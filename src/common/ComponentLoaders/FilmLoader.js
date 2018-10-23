import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = () => (
  <div className="box">
    <ContentLoader
      height={80}
      width={400}
      speed={1}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
    >
      <rect x="0" y="8" rx="4" ry="4" width="194.22" height="19.5" /> 
      <rect x="0" y="38" rx="3" ry="3" width="389.94" height="1" /> 
      <rect x="0" y="48" rx="5" ry="5" width="107" height="22" />
    </ContentLoader>
  </div>
);

export default MyLoader;