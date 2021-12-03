import React from 'react';
import { StyledHeroBanner } from './HeroBannerStyles';

const HeroBanner: React.FC<HeroBannerProps> = (props) => {
  const { children } = props;

  return (
    <StyledHeroBanner bgImage={props.banner.bgImage}>
      {children}
    </StyledHeroBanner>
  );
};

interface HeroBannerProps {
  banner: IBannerDetails;
}

export default HeroBanner;
