import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="136" cy="126" r="120" />
    <rect x="10" y="333" rx="0" ry="0" width="248" height="70" />
    <rect x="51" y="281" rx="0" ry="0" width="167" height="36" />
    <rect x="10" y="425" rx="0" ry="0" width="119" height="31" />
    <rect x="141" y="425" rx="0" ry="0" width="119" height="31" />
  </ContentLoader>
);

export default Skeleton;
