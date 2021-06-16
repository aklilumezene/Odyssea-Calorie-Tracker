import "./AddMeal.css";
import MealForm from "./MealForm";

const AddMeal = (props) => {
    const addedMealHandler = (meal) => {
        console.log("A new metric given to be added ", meal)  
    }
    return (
        <div className="add-meal">
            <MealForm onAddMeal = {addedMealHandler} />
        </div>
    )
}

export default AddMeal