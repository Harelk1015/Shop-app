import React from 'react';

import ProductsPageView from './ProductsPageView';


const ProductsPage: React.FC = () => {
  const params = new URLSearchParams(window.location.search);
  const gender = params.get('gender');
  const category = params.get('category');

  const DUMMY_PRODUCTS = [
    {
      _id: 1,
      name: 'blue pants',
      price: 29.99,
      imageUrl: 'https://cdn.shopify.com/s/files/1/2185/2813/products/W5561R_03482_b1_s1_a1_1_m18_750x.jpg?v=1622752753',
      category: { sex: 'man', kind: 'pants', sizes: [41, 42, 43] },
    },
    {
      _id: 2,
      name: 'black pants',
      price: 29.99,
      imageUrl: 'https://cdn.shopify.com/s/files/1/2185/2813/products/W5561R_03482_b1_s1_a1_1_m18_750x.jpg?v=1622752753',
      category: { sex: 'man', kind: 'pants', sizes: [41, 42, 43] },
    },
    {
      _id: 3,
      name: 'purple pants',
      price: 29.99,
      imageUrl: 'https://cdn.shopify.com/s/files/1/2185/2813/products/W5561R_03482_b1_s1_a1_1_m18_750x.jpg?v=1622752753',
      category: { sex: 'man', kind: 'pants', sizes: [41, 42, 43] },
    },
    {
      _id: 4,
      name: 'purple pants',
      price: 29.99,
      imageUrl: 'https://cdn.shopify.com/s/files/1/2185/2813/products/W5561R_03482_b1_s1_a1_1_m18_750x.jpg?v=1622752753',
      category: { sex: 'man', kind: 'pants', sizes: [41, 42, 43] },
    },
    {
      _id: 5,
      name: 'purple pants',
      price: 29.99,
      imageUrl: 'https://cdn.shopify.com/s/files/1/2185/2813/products/W5561R_03482_b1_s1_a1_1_m18_750x.jpg?v=1622752753',
      category: { sex: 'man', kind: 'pants', sizes: [41, 42, 43] },
    },
    {
      _id: 6,
      name: 'purple pants',
      price: 29.99,
      imageUrl: 'https://cdn.shopify.com/s/files/1/2185/2813/products/W5561R_03482_b1_s1_a1_1_m18_750x.jpg?v=1622752753',
      category: { sex: 'man', kind: 'pants', sizes: [41, 42, 43] },
    },
    {
      _id: 7,
      name: 'purple pants',
      price: 29.99,
      imageUrl: 'https://cdn.shopify.com/s/files/1/2185/2813/products/W5561R_03482_b1_s1_a1_1_m18_750x.jpg?v=1622752753',
      category: { sex: 'man', kind: 'pants', sizes: [41, 42, 43] },
    },
    {
      _id: 7,
      name: 'purple pants',
      price: 29.99,
      imageUrl: 'https://cdn.shopify.com/s/files/1/2185/2813/products/W5561R_03482_b1_s1_a1_1_m18_750x.jpg?v=1622752753',
      category: { sex: 'man', kind: 'pants', sizes: [41, 42, 43] },
    },
    {
      _id: 7,
      name: 'purple pants',
      price: 29.99,
      imageUrl: 'https://cdn.shopify.com/s/files/1/2185/2813/products/W5561R_03482_b1_s1_a1_1_m18_750x.jpg?v=1622752753',
      category: { sex: 'man', kind: 'pants', sizes: [41, 42, 43] },
    },
  ];

  const asd = ['asd', 'asd'];

  return <ProductsPageView items={DUMMY_PRODUCTS} gender={gender} category={category}/>;
};

export default ProductsPage;
