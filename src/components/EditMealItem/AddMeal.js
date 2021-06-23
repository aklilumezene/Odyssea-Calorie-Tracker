import "./AddMeal.css";
import MealForm from "./MealForm";
import ErrorModal from "../UI/ErrorModal"

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
            <ErrorModal title="An error occurred " message="The error is related to validation"/>
            <MealForm onAddMeal = {addedMealHandler} />
        </div>
    )
}

export default AddMeal