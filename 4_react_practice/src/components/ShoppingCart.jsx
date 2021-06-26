import React, { useRef } from 'react';

export default function ShoppingCart() {
    const [items, setItems] = React.useState([]);
    const inputRef = React.useRef();

    return (
        <div>
            <input ref={inputRef} placeholder="Item Name..." />
            <button onClick={() => {
                const inputValue = inputRef.current.value;

                inputRef.current.value = "";

                const newItems = [...items];
                newItems.push(inputValue);

                setItems(newItems);
            }}
            >Add</button>
            {
                items.map((item, index) => {
                    return(
                        <div key={index}>
                            <button onClick={()=>{
                                const newItems = [...items];
                                newItems.splice(index, 1);
                                setItems(newItems);
                                console.log(index);
                            }}>- Delete -</button>
                            {item}
                        </div>
                    )
                })
            }
        </div>
    )
}
