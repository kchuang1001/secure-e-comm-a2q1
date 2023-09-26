import React from "react";
import GooglePayButton from "@google-pay/button-react";

function CustomGooglePayButton(props) {
  const { itemName, itemModel, itemDescription, itemPrice } = props.item;

  return (
    <GooglePayButton
      environment="TEST"
      paymentRequest={{
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
          {
            type: "CARD",
            parameters: {
              allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
              allowedCardNetworks: ["MASTERCARD", "VISA"],
            },
            tokenizationSpecification: {
              type: "PAYMENT_GATEWAY",
              parameters: {
                gateway: "example",
                gatewayMerchantId: "exampleGatewayMerchantId",
              },
            },
          },
        ],
        merchantInfo: {
          merchantId: "12345678901234567890",
          merchantName: "Demo Merchant",
        },
        transactionInfo: {
          totalPriceStatus: "FINAL",
          totalPriceLabel: "Total",
          totalPrice: itemPrice.toString(),
          currencyCode: "AUD",
          countryCode: "AU",
          displayItems: [
            {
              label: itemName,
              type: "LINE_ITEM",
              price: itemPrice.toString(),
            }
          ],
        },
        callbackIntents: ["PAYMENT_AUTHORIZATION"],
      }}
      onLoadPaymentData={(paymentRequest) => {
        console.log("Success", paymentRequest);
      }}
      onPaymentAuthorized={() => ({
        transactionState: "SUCCESS",
      })}
    />
  );
}

export default CustomGooglePayButton;
