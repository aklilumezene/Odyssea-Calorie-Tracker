import "./MealItem.css"

const MealItem = (props) => {
    const dispDate = props.date.toLocalString("en-US",
    {hour: "2-digit", minute: "2-digit", hour12: false});
    const dispCalorie = props.calorie === 0 ? "" : props.calorie;
    
    return <div className="meal-item">
    <div className="meal-item__date">{dispDate}</div>
    <div className="meal-item__meal">
        <div>{props.description}</div>
        <h3>{props.meal}</h3>
    </div>
    <div className="meal-item__calorie">{dispCalorie}</div>
</div>
}

export default MealItem