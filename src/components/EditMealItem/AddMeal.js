import "./AddMeal.css";
import MealForm from "./MealForm";

const AddMeal = (props) => {
    const addedMealHandler = (meal) => {
        console.log("A new metric given to be added ", meal)
        if (meal.developer.trim().length === 0 ||
            meal.project.trim().length === 0 ||
            meal.count.trim().length === 0 ) {
            // invalid data
            return false;
        }
          
        props.onAddMeal(meal)
        return true;
    }
    return (
        <div className="add-meal">
            <MealForm onAddMeal = {addedMealHandler} />
        </div>
    )
}

export default AddMeal