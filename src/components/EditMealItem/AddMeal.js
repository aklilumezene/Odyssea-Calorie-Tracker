import "./AddMeal.css";
import MealForm from "./MealForm";
import ErrorModal from "../UI/ErrorModal"
import { useState } from "react";

const AddMeal = (props) => {
    const [error, setError] = useState()
    const addedMealHandler = (meal) => {
        console.log("A new metric given to be added ", meal)
        const mandatoryValue = " is mandatory"
        if (meal.description.trim().length === 0) {
            setError("Description type is " + mandatoryValue)
            return false;
        }
         if(meal.meal.trim().length === 0) {
              setError("The Meal type is " + mandatoryValue)
              return false;
            }
        if(meal.calorie.trim().length === 0 ) {
              setError("Calorie index is " + mandatoryValue)
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