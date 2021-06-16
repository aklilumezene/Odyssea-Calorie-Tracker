import "./MealItem.css";
import MealDate from "./MealDate";
import Card from "./UI/Card";

const MealItem = (props) => {
  const dispCalorie = props.calorie === 0 ? "" : props.calorie;

  return (
    <Card className="meal-item">
      <div className="meal-item__meal">
        <MealDate date={props.date} />
        <div>{props.description}</div>
        <h3>{props.meal}</h3>
      </div>
      <div className="meal-item__calorie">{dispCalorie}</div>
    </Card>
  );
};

export default MealItem;
