import React from 'react';
import ShoppingCart from './ShoppingCart';
import Movies from './Movies';

export default function RenderComponent(props) {
    switch (props.comp) {
        case 0:
            return <Movies movies={props.data.movies}/>
        case 1:
            return <ShoppingCart />
        default:
            return null;
    }
}
