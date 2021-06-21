import "./FilterMeals.css"


const FilterMeals = (props) => {
   const startDateChangeHandler = (event) => {
        let newStartDate = event.target.value
        console.log(newStartDate)
        props.onSetStartDate(newStartDate)
    }

    return (
        <div className="filter-meals">
            <div className="filter-meals__elements">
                <div className="filter-meals__element">
                    <p>Filter the meals</p>
                </div>
                <div className="filter-meals__element">
                    <label>Start on</label>
                    <input type="date" value={props.startDate} onChange={startDateChangeHandler}/>
                </div>
            </div>
        </div>
    )
}

export default FilterMeals