export const FILTERDATA = {
  showDropDown: true,
  showList: true,
  showSlider: true,
  showAccordianWithSearch: true,
  showAccordianWithCheckbox: true,
  showAccordianWithRating: true,
  dropDownItems: [
    { name: "Watches" },
    { name: "Headset" },
    { name: "Sweatshirt" },
  ],
  listItems: {
    listTitle: "Products",
    listItemsDataList: [
      { name: "Grocery", category: "Kitchen Storage & Containers" },
      { name: "Fashion", category: "Clothes" },
      { name: "Watches", category: "Watches" },
      { name: "Electronics", category: "Electronics" },
      { name: "Furniture", category: "Furniture" },
      { name: "Automotive Accessories", category: "Bike Accessories" },
      { name: "Appliances", category: "Tableware & Dinnerware" },
      { name: "Kids", category: "Bags, Wallets and Luggage" },
    ],
  },
  sliderData: {
    sliderTitle: "Price",
    minValue: 0,
    maxValue: 100,
  },
  accordianWithSearchData: {
    title: "Brands",
    accordianItems: [
      { id: "productBrandRadio5", name: "Boat" },
      { id: "productBrandRadio4", name: "OnePlus" },
      { id: "productBrandRadio3", name: "Realme" },
      { id: "productBrandRadio2", name: "Sony" },
      { id: "productBrandRadio1", name: "JBL" },
    ],
  },
  AccordianWithCheckboxData: {
    title: "Discount",
    accordianItems: [
      { id: "productdiscountRadio6", value: "50%", name: "50% or more" },
      { id: "productdiscountRadio5", value: "40%", name: "40% or more" },
      { id: "productdiscountRadio4", value: "30%", name: "30% or more" },
      { id: "productdiscountRadio3", value: "20%", name: "20% or more" },
      { id: "productdiscountRadio2", value: "10%", name: "10% or more" },
      { id: "productdiscountRadio1", value: "less10%", name: "Less than 10%" },
    ],
  },
  AccordianWithRatingData: {
    title: "Rating",
    accordianItems: [
      { id: "productratingRadio4", name: "4 & Above", value: "4" },
      { id: "productratingRadio3", name: "3 & Above", value: "3" },
      { id: "productratingRadio2", name: "2 & Above", value: "2" },
      { id: "productratingRadio1", name: "1", value: "1" },
    ],
  },
};
