import React from "react";
import Item from "../Items/Item";
import "./checkout.css";
import CustomGooglePayButton from "../GooglePay/CustomGooglePayButton";
import CustomPayPalButton from "../Paypal/CustomPayPalButton";
import StripeCheckOutButton from "../Stripes/StripeCheckOutButton";
import AuthrorizedNetCheckOut from "../AuthorizedNet/AuthrorizedNetCheckOut";

function CheckoutPage(props) {
  const { item } = props;
  return (
    <div className="container">
      <div className="card panel">
        <Item item={item} />
        <div>Price: ${item.itemPrice}</div>
      </div>
      <div className="panel">
        <div>
          <h2>Payment Options</h2>
          <CustomGooglePayButton item={item}/>
          <CustomPayPalButton item={item}/>
          <StripeCheckOutButton item={item}/>
          {/* <AuthrorizedNetCheckOut /> */}
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
