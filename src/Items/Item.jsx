import React from "react";
import './items.css';

/**
 *
 * @param props: {itemName: string, itemDescrition: string[], itemPrice: number}
 * @returns
 */
function Item(props) {

  const {itemName, itemModel, itemDescription, itemPrice, buyItem} = props.item;

  return (
    <>
      <div>
        
        {/* <img src={`${itemName}.png`} alt={itemName} /> */}
        <img src={`src/assets/images/laptop.jpeg`} alt={itemName} height={200}/>

        <h3>{itemName}</h3>
        <p>{itemModel}</p>
        <ul>
          {itemDescription.map((itemDescription) => {
            return <li key={itemModel + itemDescription}>{itemDescription}</li>;
          })}
        </ul>

      </div>
    </>
  );
}

export default Item;
