import React, { useRef, useEffect, useState } from "react";
// import PaymentFailure from "./PaymentFailure";
// import PaymentSuccess from "./PaymentSuccess";

function CustomPayPalButton(props) {
  const { itemName, itemModel, itemDescription, itemPrice } = props.item;
  const paypal = useRef();
  const [transactionStatus, setTransactionStatus] = useState(null);

  useEffect(() => {
    if (document.getElementsByClassName("paypal-buttons").length == 0){
        window.paypal
        .Buttons({
          createOrder: (data, actions, err) => {
            return actions.order.create({
              intent: "CAPTURE",
              purchase_units: [
                {
                  description: itemName,
                  amount: {
                    currency_code: "AUD",
                    value: itemPrice,
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
  
            console.log("success", order);
            setTransactionStatus("success");
          },
          onError: (err) => {
            console.log(err);
            setTransactionStatus("failure");
          },
        })
        .render(paypal.current);
    }

  }, []);

//   if (transactionStatus === "success") {
//     return <PaymentSuccess />;
//   }

//   if (transactionStatus === "failure") {
//     return <PaymentFailure />;
//   }

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}

export default CustomPayPalButton;