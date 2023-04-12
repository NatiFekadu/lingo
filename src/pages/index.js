import React from 'react';
// import product from '../../lingo/schemas/product'
import { Product, FooterBanner, HeroBanner } from '@/components';
import { client } from '../../lib/client';

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
     
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many Variations</p>
      </div>
      <div className="products-container">
        {products?.map((product) => product.name)}
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type=="product"]';
  const products = await client.fetch(query);
  const BannerQuery = '*[_type=="banner"]';
  const bannerData = await client.fetch(BannerQuery);

  return {
    props: { products, bannerData },
  };
};
export default Home;
