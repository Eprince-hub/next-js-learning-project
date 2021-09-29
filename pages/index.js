// import Head from 'next/head';
// import Image from 'next/image';

import Slideshow from '../components/Slider';

// import SimpleSlider from '../components/Slider';

// This is the home page that loads when nothing extra is on our url
// it is the home page

// www.ourDomainName loads this page

export default function HomePage() {
  return (
    <div>
      <h1>Hello Africa</h1>
      <p>Home Page</p>
      <Slideshow />
    </div>
  );
}
