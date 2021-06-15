import "./MealItem.css";
import MealDate from "./MealDate";

const MealItem = (props) => {
  const dispCalorie = props.calorie === 0 ? "" : props.calorie;

  return (
    <div className="meal-item">
      <div className="meal-item__meal">
        <MealDate date={props.date} />
        <div>{props.description}</div>
        <h3>{props.meal}</h3>
      </div>
      <div className="meal-item__calorie">{dispCalorie}</div>
    </div>
  );
};

export default MealItem;
