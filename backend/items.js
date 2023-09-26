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

  const getAllItems = () => {
    return itemList;
  }

  module.exports.getAllItems=getAllItems;