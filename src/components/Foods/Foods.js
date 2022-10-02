import React from "react";
import FoodSection from "../FoodSection/FoodSection";
import MexicanData from "../../data/Mexican";
import FastFoodData from "../../data/FastFood";
import IranianData from "../../data/Iranian";
import Title from "../Title/Title";
import ItalianFoods from "../italianfoods/ItalianFoods";

function Foods() {
    return (
        <section>
            <Title title="Foods" />
            <ItalianFoods/>
            {/* <FoodSection sectionName="Iranian food" foods={IranianData} />
            <FoodSection sectionName="Fast food" foods={FastFoodData} />
            <FoodSection sectionName="Mexican" foods={MexicanData} /> */}
        </section>
    );
}

export default Foods;
