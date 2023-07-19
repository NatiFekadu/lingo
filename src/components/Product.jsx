import React from 'react';
import Link from 'next/link';
import { urlFor } from '../../lib/client';
import Image from 'next/image';

const Product = ({ product: { image, name, slug, price } }) => {
  const src = urlFor(image && image[0]).url();
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <Image
            alt="product image"
            className="product-image"
            loader={() => src}
            src={src}
            width={250}
            height={250}
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
