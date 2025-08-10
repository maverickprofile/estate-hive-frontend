import React from 'react';
import HeroSection from './home/HeroSection';
import VerifiedExclusives from './home/VerifiedExclusives';
import FeaturedListings from './FeaturedListings';
import RealEstateEcosystem from './home/RealEstateEcosystem';
import Testimonials from './Testimonials';

const HomePage = () => (
  <>
    <HeroSection />
    <VerifiedExclusives />
    <FeaturedListings />
    <RealEstateEcosystem />
    <Testimonials />
  </>
);

export default HomePage;

