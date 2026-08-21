import React from 'react';

import Food from '../screens/Food';
import Grocery from '../screens/Grocery';
import Instamart from '../screens/Instamart';
import Dineout from '../screens/Dineout';
import Pharmacy from '../screens/Pharmacy';
import Meat from '../screens/Meat';
import Genie from '../screens/Genie';
import Petcare from '../screens/Petcare';

const CategoryContent = ({ category }) => {
  switch (category) {
    case 'food':
      return <Food />;

    case 'grocery':
      return <Grocery />;

    case 'instamart':
      return <Instamart />;

    case 'dineout':
      return <Dineout />;

    case 'pharmacy':
      return <Pharmacy />;

    case 'meat':
      return <Meat />;
    case 'petcare':
      return <Petcare />;
    case 'genie':
      return <Genie />;

    default:
      return null;
  }
};

export default CategoryContent;
