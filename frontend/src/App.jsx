// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { useState } from "react";
import "./App.css";
import CustomGooglePayButton from "./GooglePay/CustomGooglePayButton";
import ItemList from "./Items/ItemList";
import CheckoutPage from "./Checkout/CheckoutPage";
const itemList = [
  {
    itemName: "Acer Switch SA5-271P 12 Inch",
    itemModel: "Sa5-i5-8GB-256-QHD-W10H-CXG",
    itemDescription: [
      "Intel i5-6200U 2.30GHz Dual Core",
      "8GB RAM",
      "256GB SSD",
      "Windows 10 Home",
    ],
    itemPrice: 799,
  },
  {
    itemName: "HP EliteBook Folio 9480m 14 inch",
    itemModel: "9480M-i5-8GB-256-W10P-CXG",
    itemDescription: [
      "14 inch HD+(1600x900) Display",
      "Intel i5-4310U 2.00GHz Dual Core",
      "8GB RAM",
      "256GB SSD",
    ],
    itemPrice: 549,
  },
  {
    itemName: "HP EliteBook Folio 9470m 14 inch",
    itemModel: "9470M-i5-8GB-256-W10P-CXG",
    itemDescription: [
      "14 inch HD+(1600x900) Display",
      "Intel i5-3437U 1.90GHz Dual Core",
      "8GB RAM",
      "256GB SSD",
    ],
    itemPrice: 429,
  },
  {
    itemName: "HP ProBook 430 G3 13.3 inch",
    itemModel: "430G3-i5-8GB-256-QHD-W10P-CXG",
    itemDescription: [
      "13.3 inch WXGA Display",
      "Intel i5-6200U 2.30GHz Dual Core",
      "8GB RAM",
      "256GB SSD",
    ],
    itemPrice: 649,
  },
];

function App() {
  const [state, setState] = useState("ItemList");
  const [item, setItem] = useState();
  const buyItem = (item) => {
    setItem(item);
    setState("CheckOut");
    console.log("Buying item..." + item.itemName);
  };

  switch (state) {
    case "ItemList":
      return <>
      <ItemList itemList={itemList} buyItem={buyItem}/>
      </>

    case "CheckOut":
      return <CheckoutPage item={item} />

    default:
      return <></>
  }
}

export default App;
