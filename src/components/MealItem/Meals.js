import "./Meals.css";
import MealItem from "./MealItem";
import Card from "../UI/Card";

const Meals = (props) => {
  return (
    <Card className="meals">
      {props.data.map(item => {
        return (
          <MealItem
            date={item.timestamp}
            meal={item.meal}
            description={item.description}
            calorie={item.calorie}
          />
        );
      })}
    </Card>
  );
};

export default Meals;
