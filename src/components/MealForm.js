import "./MealForm.css";

const MealForm = (props) => {
    return (
        <form>
            <div className="add-meal__elements">
                <div className="add-meal__element">
                    <label>Date</label>
                    <input type="datetime-local" />
                </div>
                <div className="add-meal__element">
                    <label>Meal</label>
                    <input type="text" />
                </div>
                <div className="add-metric__element">
                    <label>Description</label>
                    <input type="text" />
                </div>
                <div className="add-meal__element">
                    <label>Calorie</label>
                    <input type="number" min="0" step="1" />
                </div>

            </div>
            <div className="add-meal__actions">
                <button type="submit">Add Meal</button>
            </div>
        </form>
    )
}

export default MealForm;