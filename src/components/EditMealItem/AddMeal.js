import "./AddMeal.css";
import MealForm from "./MealForm";
import ErrorModal from "../UI/ErrorModal"
import { useState } from "react";

const AddMeal = (props) => {
    const [error, setError] = useState()
    const addedMealHandler = (meal) => {
        console.log("A new metric given to be added ", meal)
        if (meal.developer.trim().length === 0 ||
            meal.project.trim().length === 0 ||
            meal.count.trim().length === 0 ) {
                setError("Error data detected.")
            // invalid data
            return false;
        }
          
        props.onAddMeal(meal)
        return true;
    }
   
    const onDismissModalHandler = () => {
        console.log("Resetting error")
        setError(null)
    }
 
    return (
        <div className="add-meal">
             {error && <ErrorModal title="An error occurred" message={error} onDismiss={onDismissModalHandler}/>}
            <MealForm onAddMeal = {addedMealHandler} />
        </div>
    )
}

export default AddMeal