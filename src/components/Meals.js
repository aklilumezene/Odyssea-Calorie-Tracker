import "./Meals.css"
import MealItem from "./MealItem"
import Card from "./Card"

const Meals = (props) => {
    return(
 <Card className = "meals">
     <MealItem calorie={props.data[0].calorie} meal={props.data[0].meal} description={props.data[0].description} date={props.data[0].timestamp} />
      <MealItem calorie={props.data[1].calorie} meal={props.data[1].meal} description={props.data[1].description} date={props.data[1].timestamp} />
      <MealItem calorie={props.data[2].calorie} meal={props.data[2].meal} description={props.data[2].description} date={props.data[2].timestamp} />
      <MealItem calorie={props.data[3].calorie} meal={props.data[3].meal} description={props.data[3].description} date={props.data[3].timestamp} />
      <MealItem calorie={props.data[4].calorie} meal={props.data[4].meal} description={props.data[4].description} date={props.data[4].timestamp} />
 </Card>
    );
}

export default Meals
