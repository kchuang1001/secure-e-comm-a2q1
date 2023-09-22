import React from 'react'
import Item from './Item';

import './items.css';

function ItemList(props) {
  return <>
    {props.itemList.map(
      (item) => {
        return <div className="card item" key={item.itemName} >
          <Item 
            item={item}
          />
          <div style={{display:"inline-block", marginRight: 20}}>${item.itemPrice}</div>
          <button style={{display: "inline-block"}} onClick={() => props.buyItem(item)}>Buy</button>
        </div>
      }
    )}
  </>
}

export default ItemList