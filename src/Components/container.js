import React from "react";
import data from "../Assets/mockdata";
import MealComponent from "./MealComponent";

function container() {
  let Meals = data.meals;

  //console.log(Meals);
  return (
    <div className="container-fluid">
      {Meals.map((meal) => {
        
        return <MealComponent
          title={meal.strMeal}
          description={meal.strArea}
          category={meal.strCategory}
          youtube={meal.strYoutube}
          tag={meal.strTags}
          thumb={meal.strMealThumb}
          key={meal.idMeal}
        />;
})}
    </div>
  );
}

export default container;

// let examplemeal = Meals[0];
//  console.log(examplemeal);
// return (
// <>
//   <div className="container-fluid">
//     <div>
//     <MealComponent
//       title={examplemeal.strMeal}
//      description={examplemeal.strArea}
//       category={examplemeal.strCategory}
//      youtube={examplemeal.strYoutube}
//      tag={examplemeal.strTags}
//      thumb={examplemeal.strMealThumb}
//     />
//   </div>
//   <div>
//     <MealComponent
//        title={Meals[1].strMeal}
//        description={Meals[1].strArea}
//        category={Meals[1].strCategory}
//        youtube={Meals[1].strYoutube}
//        tag={Meals[1].strTags}
//        thumb={Meals[1].strMealThumb}
//      />
//     </div>
//   </div>
// </>
// );
//}
