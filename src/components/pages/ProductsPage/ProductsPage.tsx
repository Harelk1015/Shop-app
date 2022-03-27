import React from 'react';

import ProductsPageView from './ProductsPageView';

export const DUMMY_PRODUCTS = [
  {
    _id: 1,
    name: 'blue pants',
    price: 29.99,
    imageUrl:
      'https://cdn.shopify.com/s/files/1/2185/2813/products/W5561R_03482_b1_s1_a1_1_m18_750x.jpg?v=1622752753',
    category: {
      sex: 'man',
      kind: 'pants',
    },
    sizes: [41, 42, 43],
  },
  {
    _id: 2,
    name: 'black pants',
    price: 29.99,
    imageUrl:
      'https://litb-cgis.rightinthebox.com/images/x/202008/iqhm1597303836855.jpg',
    category: {
      sex: 'man',
      kind: 'pants',
    },
    sizes: [41, 42, 43],
  },
  {
    _id: 3,
    name: 'purple pants',
    price: 29.99,
    imageUrl:
      'https://litb-cgis.rightinthebox.com/images/x/202011/atmmpd1604983076568.jpg',
    category: {
      sex: 'man',
      kind: 'pants',
    },
    sizes: [41, 42, 43],
  },
  {
    _id: 4,
    name: 'purple pants',
    price: 29.99,
    imageUrl:
      'https://www.delta.co.il/pub/media/catalog/product/cache/68cb7419c5fbe5ff1cd1d2abdd94fb1c/l/d/LDK1921_LM06A_2-1626887989454690.jpg',
    category: {
      sex: 'man',
      kind: 'pants',
    },
    sizes: [41,42,43],
  },
  {
    _id: 5,
    name: 'purple pants',
    price: 29.99,
    imageUrl:
      'https://cdn.shopify.com/s/files/1/2185/2813/products/W5561R_03482_b1_s1_a1_1_m18_750x.jpg?v=1622752753',
    category: {
      sex: 'man',
      kind: 'pants',
    },
    sizes: [41, 42, 43],
  },
  {
    _id: 6,
    name: 'purple pants',
    price: 29.99,
    imageUrl:
      'https://cdn.shopify.com/s/files/1/2185/2813/products/W5561R_03482_b1_s1_a1_1_m18_750x.jpg?v=1622752753',
    category: {
      sex: 'man',
      kind: 'pants',
    },
    sizes: [41, 42, 43],
  },
  {
    _id: 7,
    name: 'purple pants',
    price: 29.99,
    imageUrl:
      'https://cdn.shopify.com/s/files/1/2185/2813/products/W5561R_03482_b1_s1_a1_1_m18_750x.jpg?v=1622752753',
    category: {
      sex: 'man',
      kind: 'pants',
    },
    sizes: [41, 42, 43],
  },
  {
    _id: 8,
    name: 'purple pants',
    price: 29.99,
    imageUrl:
      'https://cdn.shopify.com/s/files/1/2185/2813/products/W5561R_03482_b1_s1_a1_1_m18_750x.jpg?v=1622752753',
    category: {
      sex: 'man',
      kind: 'pants',
    },
    sizes: [41, 42, 43],
  },
  {
    _id: 9,
    name: 'purple pants',
    price: 29.99,
    imageUrl:
      'https://cdn.shopify.com/s/files/1/2185/2813/products/W5561R_03482_b1_s1_a1_1_m18_750x.jpg?v=1622752753',
    category: {
      sex: 'man',
      kind: 'pants',
    },
    sizes: [41, 42, 43],
  },
];
const ProductsPage: React.FC = () => {
  const params = new URLSearchParams(window.location.search);
  const gender = params.get('gender');
  const category = params.get('category');


  // Fetch - GET (use gender and category to get the right list and pass to pageView)

  return (
    <ProductsPageView
      items={DUMMY_PRODUCTS}
      gender={gender}
      category={category}
    />
  );
};

export default ProductsPage;
