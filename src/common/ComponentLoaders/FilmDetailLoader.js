import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = () => (
	<ContentLoader
    height={130}
    width={400}
    speed={1}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="0" y="6.85" rx="0" ry="0" width="208.86" height="26" /> 
    <rect x="0" y="38.85" rx="0" ry="0" width="400" height="1" /> 
    <rect x="0" y="48.85" rx="0" ry="0" width="106" height="5" /> 
    <rect x="0" y="57.85" rx="0" ry="0" width="106" height="5" /> 
    <rect x="0" y="65.85" rx="0" ry="0" width="106" height="5" /> 
    <rect x="0" y="84.85" rx="0" ry="0" width="390" height="5" /> 
    <rect x="0" y="92.85" rx="0" ry="0" width="400" height="5" /> 
    <rect x="0" y="100.85" rx="0" ry="0" width="395" height="5" /> 
    <rect x="0" y="108.85" rx="0" ry="0" width="390" height="5" /> 
    <rect x="0" y="116.85" rx="0" ry="0" width="370" height="5" />
  </ContentLoader>
);

export default MyLoader;