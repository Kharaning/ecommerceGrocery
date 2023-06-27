import { BiFoodMenu } from "react-icons/bi";
import {
    GiKiwiFruit,
    GiTomato,
    GiHerbsBundle,
    GiMilkCarton,
    GiMeat,
    GiFishingLure,
    GiSlicedBread,
    GiWineBottle,
    GiHoneycomb,
} from "react-icons/gi";
  
const menuItems = [
    {
      icon: <BiFoodMenu />,
      name: "Everything",
      id: 0,
    },
    {
      icon: <GiKiwiFruit />,
      name: "Fruits",
      id: 1,
    },
    {
      icon: <GiTomato />,
      name: "Vegetables",
      id: 2,
    },
    {
      icon: <GiHerbsBundle />,
      name: "Herbs",
      id: 3,
    },
    {
      icon: <GiMilkCarton />,
      name: "Dairy, Cheese & Eggs",
      id: 4,
    },
    {
      icon: <GiMeat />,
      name: "Meat",
      id: 5,
    },
    {
      icon: <GiFishingLure />,
      name: "Seafood",
      id: 6,
    },
    {
      icon: <GiSlicedBread />,
      name: "Bakery & Bread",
      id: 7,
    },
    {
      icon: <GiWineBottle />,
      name: "Beverages",
      id: 8,
    },
    {
      icon: <GiHoneycomb />,
      name: "Honey",
      id: 9,
    },
  ];
  
export default menuItems;