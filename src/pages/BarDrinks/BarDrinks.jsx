import React, { useState } from "react";
import Hero from "../../Components/Bar/Hero";
import Drinks from "../../Components/Bardrinks/Drinks";
import FeaturedDrinks from "../../Components/Bardrinks/FeaturedDrinks";
import Premiumdrinks from "../../Components/Bardrinks/Premiumdrinks";
import DialogReceipt from "@/Components/CustomSection/DialogReceipt";

const BarDrinks = () => {
  const [receipt, setReceipt] = useState(false);

  return (
    <>
      <Hero />
      <Drinks receipt={receipt} setReceipt={setReceipt} />
      <FeaturedDrinks />
      <Premiumdrinks />
      <DialogReceipt receipt={receipt} setReceipt={setReceipt} />
    </>
  );
};

export default BarDrinks;
