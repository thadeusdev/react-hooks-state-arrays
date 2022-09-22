import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  // const [filterBy, setFilterBy] = useState("All")

  // Adding Elements To Arrays In State
  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoodArray = [...foods, newFood]
    console.log(newFoodArray);
  }

  // Removing Elements From Arrays In State
  // function handleClick(id){
  //   const newFoodArray = foods.filter((food) => food.id !== id)
  //   setFoods(newFoodArray)
  // }

  // Updating Elements in Arrays in State
  function handleLiClick(id){
    const newFoodArray = foods.map((food) => {
      if (food.id === id) {
        return {
          ...food,
          heatLevel: food.heatLevel + 1
        }
      }else{
        return food
      }
    })
    setFoods(newFoodArray)
  }

  const foodList = foods.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  // // Working With Multiple State Variables
  // function handleFilterChange(event){
  //   setFilterBy(event.target.value);
  // }

  // const foodsToDisplay = foods.filter((food) => {
  //   if (filterBy === "All"){
  //     return true;
  //   }else{
  //     return food.cuisine === filterBy
  //   }
  // })

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
      {/* <select name="filter" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select> */}
    </div>
  );
}

export default SpicyFoodList;
