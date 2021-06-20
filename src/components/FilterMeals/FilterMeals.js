import { useState } from "react"
import "./FilterMeals.css"


const FilterMeals = (props) => {
    const [startDate, setStartDate] = useState("")

    const startDateChangeHandler = (event) => {
        let newStartDate = event.target.value
        console.log(newStartDate)
        props.onSetStartDate(newStartDate)
        setStartDate(newStartDate)
    }

    return (
        <div className="filter-meals">
            <div className="filter-meals__elements">
                <div className="filter-meals__element">
                    <p>Filter the meals</p>
                </div>
                <div className="filter-meals__element">
                    <label>Start on</label>
                    <input type="date" value={startDate} onChange={startDateChangeHandler}/>
                </div>
            </div>
        </div>
    )
}

export default FilterMeals