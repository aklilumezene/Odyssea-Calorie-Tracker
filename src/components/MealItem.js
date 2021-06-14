import "./MealItem.css"

const MealItem = (props) => {
    return <div className="meal-item">
    <div className="meal-item__date">{props.date.toISOString()}</div>
    <div className="meal-item__meal">
        <div>{props.description}</div>
        <h3>{props.meal}</h3>
    </div>
    <div className="meal-item__calorie">{props.calorie}</div>
</div>
}

export default MealItem