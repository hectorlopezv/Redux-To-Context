import React, {useState} from 'react';


export const ProductsContext = React.createContext({
    products: []

});
ProductsContext.displayName = 'products-context-api-store';

const AnonymousFunction = (props) => {
    //manage state in here all the products
    //give products to get read state
    //set Products to set State
    const [ProductsList, setProductsList] = useState([
        {
          id: 'p1',
          title: 'Red Scarf',
          description: 'A pretty red scarf.',
          isFavorite: false
        },
        {
          id: 'p2',
          title: 'Blue T-Shirt',
          description: 'A pretty blue t-shirt.',
          isFavorite: false
        },
        {
          id: 'p3',
          title: 'Green Trousers',
          description: 'A pair of lightly green trousers.',
          isFavorite: false
        },
        {
          id: 'p4',
          title: 'Orange Hat',
          description: 'Street style! An orange hat.',
          isFavorite: false
        }
      ]);
//every child will get a new value when state updates
    return (
        <ProductsContext.Provider value={{products: ProductsList }}>
            {props.children}
        </ProductsContext.Provider>);
};


export default AnonymousFunction;
