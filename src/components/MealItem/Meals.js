import "./Meals.css";
import MealItem from "./MealItem";
import Card from "../UI/Card";

const Meals = (props) => {
  return (
    <Card className="meals">
      {props.data.map((item, index) => {
        return (
          <MealItem
            date={props.data[index].timestamp}
            meal={props.data[index].meal}
            description={props.data[index].description}
            calorie={props.data[index].calorie}
          />
        );
      })}
    </Card>
  );
};

export default Meals;
