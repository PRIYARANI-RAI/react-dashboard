// Sidebar imports
import {
  UilEstate,
  UilShoppingBag,
  UilFolder,
  UilPackage,
  UilChart,
} from "@iconscout/react-unicons";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
  },
  {
    icon: UilChart,
  },
  {
    icon: UilPackage,
  },
  {
    icon: UilFolder,
  },
  {
    icon: UilShoppingBag,
  },
];

// Recent Orders data
export const recentOrders = [
  {
    image: require("../assests/profile2.jpeg"),
    customer: "Wade Warren",
    orderNo: "15478256",
    amount: "$124.00",
    status: "Delivered",
  },
  {
    image: require("../assests/profile3.jpeg"),
    customer: "Jane Cooper",
    orderNo: "48967586",
    amount: "$305.02",
    status: "Cancelled",
  },
  {
    image: require("../assests/profile4.jpeg"),
    customer: "Guy Hawkins",
    orderNo: "85478256",
    amount: "$224.00",
    status: "Pending",
  },
  {
    image: require("../assests/profile.jpg"),
    customer: "Kristin Watson",
    orderNo: "78967582",
    amount: "$500.02",
    status: "Delivered",
  },
  {
    image: require("../assests/profile5.jpeg"),
    customer: "Cody Fisher",
    orderNo: "85267582",
    amount: "$545.02",
    status: "Delivered",
  },
];

// Customer feedback data
export const feedbacksData = [
  {
    image: require('../assests/profile3.jpeg'), 
    customer: "Jenny Wilson",
    rating: 4,
    feedback:
      "The food was excellent and so was the service.I had mushroom risotto with scallopswhich was awesome.",
  },
  {
    image: require('../assests/profile5.jpeg'), 
    customer: "Dianne Russell",
    rating: 5,
    feedback:
      "We enjoyed the Eggs Benedict served on homemage focaccia bread and hot coffee. Prefect Service.",
  },
  {
    image: require('../assests/profile2.jpeg'), 
    customer: "Devon Lane",
    rating: 4,
    feedback: "I had a burger over green(gluten-free) which was very good. The food was excellent and so was the service.",
  },
];
