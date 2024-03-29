import React from 'react';
import Link from 'next/link';
import { urlFor } from '../../lib/client';
import Image from 'next/image';

const HeroBanner = ({heroBanner :{product,image,smallText,midText,largeText1,buttonText,desc}}) => {
  const src =urlFor(image).url();
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{smallText}</p>
            <h3>{midText}</h3>
            <h1>{largeText1}</h1>
            <Image loader={() => src} src={src} width={1} height={1} alt='Product Image' className='hero-banner-image'/>
          <div>
            <Link href={`/product/${product}`}>
              <button type='button'>{buttonText}</button>
            </Link>
            <div className='desc'>
                  <h5>Description</h5>
                  <p>{desc}</p>
            </div>
            </div>  
      </div>
    </div>
  );
};

export default HeroBanner;
