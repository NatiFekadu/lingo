import React from 'react';
import Link from 'next/link';
import { urlFor } from '../../lib/client';
import Image from 'next/image';

const FooterBanner = ({
  footerBanner: {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    product,
    image,
    buttonText,
    desc,
  },
}) => {
  const src =urlFor(image).url();
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>
        <Image alt='Footer image' loader={() => src} src={src} width={1} height={1} className="footer-banner-image" />
      </div>
    </div>
  );
};

export default FooterBanner;
